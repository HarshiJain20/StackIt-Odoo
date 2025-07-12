import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import 'quill-emoji/dist/quill-emoji.css';
import 'quill-emoji';

const AskQuestion = () => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [description, setDescription] = useState('');

  // Initialize Quill with emoji
  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        placeholder: 'Write your question here...',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            [{ align: [] }],
            ['emoji'],
            ['clean']
          ],
          'emoji-toolbar': true,
          'emoji-textarea': false,
          'emoji-shortname': true,
        }
      });

      quillRef.current.on('text-change', () => {
        setDescription(quillRef.current.root.innerHTML);
      });
    }
  }, []);

  const handleTagKeyDown = (e) => {
    if ((e.key === 'Enter' || e.key === ',') && tagInput.trim()) {
      e.preventDefault();
      const newTag = tagInput.trim().replace(/,$/, '');
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setTagInput('');
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description, tags });
    alert('✅ Question submitted! Check console for output.');
  };

  return (
    <div className="pt-20 px-4 min-h-screen bg-slate-100 flex justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">Ask a Public Question</h2>

        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-5">
            <label className="block font-medium mb-1">Title</label>
            <input
              type="text"
              placeholder="e.g. How to integrate JWT in React?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* Description (Quill) */}
          <div className="mb-5">
            <label className="block font-medium mb-1">Description</label>
            <div
              ref={editorRef}
              className="bg-white border border-gray-300 rounded-md min-h-[200px]"
            ></div>
          </div>

          {/* Tags */}
          <div className="mb-5">
            <label className="block font-medium mb-1">Tags</label>
            <div className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-cyan-300">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      &times;
                    </button>
                  </span>
                ))}
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleTagKeyDown}
                  placeholder="Add tag..."
                  className="flex-grow border-none outline-none bg-transparent px-1 py-1"
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
