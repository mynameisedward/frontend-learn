import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { Tag } from "../Tag/Tag";
import styles from "./Note.module.css";
import React from "react";
import { Link } from "react-router";

export const Note = function (props) {
  const { title, content, tags, onDelete, id } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.note}>
        <div className={styles.header}>
          <Link to={`note/${id}`} className={styles.title}>
            {title}
          </Link>
          <button
            className={styles.deleteButton}
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            title="Удалить"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
            </svg>
          </button>
        </div>
        <p className={styles.content}>{content}</p>
        {tags && Boolean(tags.length) && (
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <Tag tag={tag} key={index} onClick={() => {}} />
            ))}
          </div>
        )}
      </div>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <div className={styles.modalNote}>
          <h2 className={styles.modalTitle}>{title}</h2>
          <p className={styles.modalContent}>{content}</p>
          <div className={styles.modalTags}>
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} onClick={() => {}} />
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};
