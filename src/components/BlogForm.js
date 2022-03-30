import React, {useState} from 'react';

function BlogForm(props) {
    const [data, setData] = useState({
        title: "",
        body: "",
        author: "mario"
    });

    const changeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault();

    }

    return (
        <div className={'create'}>
            <h2>New Blog</h2>
            <form onSubmit={submit}>
                <label>Blog Title</label>
                <input
                    type="text"
                    required
                    value={data.title}
                    name="title"
                    onChange={changeHandler}
                />

                <label>Content</label>
                <textarea
                    required
                    name="body"
                    value={data.body}
                    onChange={changeHandler}
                />
                <label>Blog Author</label>
                <select name="author" value={data.author} onChange={changeHandler}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>

                <button type={"submit"}>Add Blog</button>
            </form>
        </div>
    );
}

export default BlogForm;