import React from 'react';

function BlogForm(props) {
    return (
        <div className={'create'}>
            <h2>New Blog</h2>
            <form>
                <label>Blog Title</label>
                <input
                    type="text"
                    required
                />

                <label>Content</label>
                <textarea
                    required
                ></textarea>
                <label>Blog Author</label>
                <select>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>

                <button>Add Blog</button>
            </form>
        </div>
    );
}

export default BlogForm;