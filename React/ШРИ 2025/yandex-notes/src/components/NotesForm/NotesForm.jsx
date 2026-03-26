import { useState } from 'react';
import styles from './NotesForm.module.css';
import React from 'react';
import { NoteService } from '../../services/note';

export const NotesForm = function NotesForm({ onAddNote }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');
    const [error, setError] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        if (!NoteService.verify({title, content, tags})) {
            setError('Добавьте заголовок');
            return;
        }

        onAddNote({
            id: Math.random().toString(),
            title,
            content,
            tags: tags ? tags.split(',') : [],
        });

        setTitle('');
        setContent('');
        setTags('');
    };

    return (
        <form className={styles.notesForm} onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Заголовок заметки"
                value={title}
                onChange={(event) => {
                    setTitle(event.target.value);
                    if (error) {
                        setError('');
                    }
                }}
                className={styles.inputField}
            />
            {Boolean(error) && <span className={styles.error}>{error}</span>}
            <textarea
                placeholder="Содержание заметки"
                className={styles.inputField}
                value={content}
                onChange={(event) => {
                    setContent(event.target.value);
                }}
            />
            <input
                type="text"
                placeholder="Теги (через запятую)"
                className={styles.inputField}
                value={tags}
                onChange={(event) => {
                    setTags(event.target.value);
                }}
            />
            <button type="submit" className={styles.button}>
                Добавить заметку
            </button>
        </form>
    );
};
