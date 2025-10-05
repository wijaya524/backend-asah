const { addNoteHandler, getNoteHandler, getNoteIdHandler, getEditedHandler, getDeletedHandler } = require("./handler");

const routes = [
    {
        method: "POST",
        path: "/notes",
        handler: addNoteHandler
    },
    {
        method: "GET",
        path: "/notes",
        handler: getNoteHandler
    },
    {
        method: "GET",
        path: `/notes/{id}`,
        handler: getNoteIdHandler
    },
    {
        method: "PUT",
        path: `/notes/{id}`,
        handler: getEditedHandler
    },
        {
        method: "DELETE",
        path: `/notes/{id}`,
        handler: getDeletedHandler
    }
];

module.exports = routes;