import React, { useState } from "react";

export default function EntityTable({
  title,
  data,
  columns,
  onAdd,
  onEdit,
  onDelete,
  renderForm,
}) {
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(null);

  function openAdd() {
    setEditItem(null);
    setShowForm(true);
  }

  function openEdit(item) {
    setEditItem(item);
    setShowForm(true);
  }

  function closeForm() {
    setShowForm(false);
  }

  function handleSave(formData) {
    if (editItem) {
      onEdit(editItem.id, formData);
    } else {
      onAdd(formData);
    }
    closeForm();
  }

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <button
          onClick={openAdd}
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
        >
          Add New
        </button>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((col) => (
              <th
                key={col.accessor}
                className="border border-gray-300 px-3 py-2 text-left"
              >
                {col.header}
              </th>
            ))}
            <th className="border border-gray-300 px-3 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length + 1} className="p-3 text-center">
                No records found.
              </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                {columns.map((col) => (
                  <td key={col.accessor} className="border px-3 py-2">
                    {item[col.accessor]}
                  </td>
                ))}
                <td className="border px-3 py-2">
                  <button
                    onClick={() => openEdit(item)}
                    className="text-blue-600 hover:underline mr-3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      if (
                        window.confirm("Are you sure you want to delete this?")
                      ) {
                        onDelete(item.id);
                      }
                    }}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {showForm && (
        <FormModal
          title={editItem ? `Edit ${title}` : `Add New ${title}`}
          onClose={closeForm}
          onSave={handleSave}
          initialData={editItem}
        >
          {renderForm && renderForm({ initialData: editItem })}
        </FormModal>
      )}
    </div>
  );
}

function FormModal({ title, onClose, onSave, children, initialData }) {
  const [formData, setFormData] = useState(initialData || {});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((fd) => ({ ...fd, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave(formData);
  }

  // Clone children and inject formData & onChange
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, { formData, handleChange })
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow max-w-lg w-full"
      >
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        {childrenWithProps}
        <div className="flex justify-end gap-3 mt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
