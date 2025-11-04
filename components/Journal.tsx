import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { JournalEntry as JournalEntryType } from '../types';
import { Button } from './ui/Button';

const initialEntries: JournalEntryType[] = [
    {
        id: '1',
        title: 'First One',
        content: 'Filler text',
        date: new Date().toISOString(),
    },
    {
        id: '2',
        title: 'On Aesthetics',
        content: 'Filler text',
        date: new Date(Date.now() - 86400000).toISOString(), // yesterday
    },
];

const Journal: React.FC = () => {
    const [entries, setEntries] = useState<JournalEntryType[]>([]);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');
    
    useEffect(() => {
        try {
            const storedEntries = localStorage.getItem('journalEntries');
            if (storedEntries) {
                setEntries(JSON.parse(storedEntries));
            } else {
                setEntries(initialEntries);
            }
        } catch (error) {
            console.error("Failed to parse journal entries from localStorage", error);
            setEntries(initialEntries);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('journalEntries', JSON.stringify(entries));
    }, [entries]);

    const handleAddEntry = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTitle.trim() || !newContent.trim()) return;

        const newEntry: JournalEntryType = {
            id: Date.now().toString(),
            title: newTitle,
            content: newContent,
            date: new Date().toISOString(),
        };

        setEntries([newEntry, ...entries]);
        setNewTitle('');
        setNewContent('');
        setIsFormVisible(false);
    };

    const title = "Ravings";
    const titleVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1,
            },
        },
    };
    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.5 } },
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return {
            day: date.toLocaleDateString(undefined, { day: '2-digit' }),
            month: date.toLocaleDateString(undefined, { month: 'short' }),
        }
    }

    return (
        <main className="container mx-auto px-6 md:px-8 py-24 md:py-32 min-h-screen">
            <motion.h1
                className="text-7xl md:text-8xl font-serif text-brand-crimson dark:text-neutral-100 mb-16 font-bold tracking-tighter text-center"
                variants={titleVariants}
                initial="hidden"
                animate="visible"
            >
                {title.split("").map((char, index) => (
                    <motion.span key={index} variants={letterVariants} className="inline-block">
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.h1>

            <div className="text-center mb-16">
                 <Button onClick={() => setIsFormVisible(!isFormVisible)} variant="primary">
                    {isFormVisible ? 'Cancel' : 'New Entry'}
                </Button>
            </div>
            
            <AnimatePresence>
            {isFormVisible && (
                <motion.form 
                    onSubmit={handleAddEntry} 
                    className="max-w-3xl mx-auto mb-20 overflow-hidden" 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: 'auto', transition: { duration: 0.5, ease: 'easeOut' } }} 
                    exit={{ opacity: 0, height: 0, transition: { duration: 0.3, ease: 'easeIn' } }}
                >
                     <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        placeholder="Title of your raving"
                        className="w-full bg-card border border-border rounded-md p-3 mb-4 text-2xl font-serif text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                    />
                     <textarea
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                        placeholder="Spill your thoughts..."
                        rows={8}
                        className="w-full bg-card border border-border rounded-md p-3 font-sans text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                    />
                    <div className="text-right mt-4">
                        <Button type="submit">Publish</Button>
                    </div>
                </motion.form>
            )}
            </AnimatePresence>

            <div className="max-w-3xl mx-auto space-y-20">
                {entries.map(entry => (
                    <motion.div key={entry.id} className="grid grid-cols-[80px_1fr] gap-6 md:gap-8 items-start" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
                        <div className="text-right pr-4 border-r border-border mt-1">
                            <p className="text-2xl font-serif text-muted-foreground">{formatDate(entry.date).day}</p>
                            <p className="text-sm uppercase tracking-widest text-muted-foreground">{formatDate(entry.date).month}</p>
                        </div>
                        <div>
                            <h2 className="text-4xl font-serif font-bold text-foreground mb-4 leading-tight">{entry.title}</h2>
                            <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                                {entry.content}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
};

export default Journal;
