import { useState } from "react";
import "./NoteCard.css";

function NoteCard({ id, title, body }) {
  const [showEdit, setShowEdit] = useState(false);

  const [defaultValue, setDefaultValue] = useState({
    id: id,
    title: title,
    body: body,
  });

  const handleDelete = (args) => {
    fetch(`http://localhost:5000/notes/${args}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    window.location.href = "/home";
  };

  const handleEdit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/notes/${id}`, {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: defaultValue.title,
        body: defaultValue.body,
      }),
    });

    window.location.href = "/home";
  };

  return (
    <div className="noteCard" id={id}>
      <i
        className="fa fa-trash delIcon"
        onClick={() => {
          handleDelete(id);
        }}
      ></i>
      <i
        className="fa fa-edit editIcon"
        onClick={() => {
          setShowEdit(!showEdit);
        }}
      ></i>
      {showEdit ? (
        <form className="formEdit" onSubmit={handleEdit}>
          <label htmlFor="body">judul</label>
          <input
            type="text"
            id="id"
            name="title"
            value={defaultValue.title}
            onChange={(e) => {
              setDefaultValue({
                ...defaultValue,
                title: e.target.value,
              });
            }}
          />

          <label htmlFor="body">isi note</label>
          <textarea
            name="body"
            id="body"
            value={defaultValue.body}
            onChange={(e) => {
              setDefaultValue({
                ...defaultValue,
                body: e.target.value,
              });
            }}
          ></textarea>

          <button type="submit">simpen</button>
        </form>
      ) : (
        <>
          <h3 className="noteTitle">{title}</h3>
          <p
            className="noteBody"
            dangerouslySetInnerHTML={{ __html: body }}
          ></p>
        </>
      )}
    </div>
  );
}

export default NoteCard;
