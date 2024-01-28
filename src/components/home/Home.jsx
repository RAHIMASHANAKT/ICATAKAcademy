import React, { useState, useEffect } from 'react';
import { Box, Typography, Link, Card, CardContent } from '@mui/material';
import axios from 'axios';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [userId, setUserId] = useState('');
    const [Id, setId] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setBlogs(response.data);
            })
            .catch(error => {
                console.error('Error fetching blogs:', error);
            });
    }, []);

    const whenClicked = (userid, id, title) => {
        setUserId(userid);
        setId(id);
        setTitle(title);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f0f0', padding: '20px' }}>
            <Box sx={{ marginBottom: '20px' }}>
                <Link href="/home" sx={{ fontSize: '18px', color: '#333', textDecoration: 'none', margin: '0 20px', fontWeight: 'bold' }}>Home</Link>
                <Link href="/blogform" sx={{ fontSize: '18px', color: '#333', textDecoration: 'none', margin: '0 20px', fontWeight: 'bold' }}>Add Blog</Link>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '20px' }}>
                <Box sx={{ border: '2px solid #333', borderRadius: '10px', backgroundColor: '#fff', width: '45%', padding: '20px' }}>
                    <Typography variant='h4' sx={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Blog Dashboard</Typography>
                    <ul style={{ listStyleType: 'none', padding: '0' }}>
                        {blogs.map(blog => (
                            <li key={blog.id} style={{ borderBottom: '1px solid #333', marginBottom: '10px' }}>
                                <p><a onClick={() => whenClicked(blog.userId, blog.id, blog.title)} style={{ cursor: 'pointer', color: '#333' }}>{blog.id}.{blog.title}</a></p>
                            </li>
                        ))}
                    </ul>
                </Box>

                <Card sx={{ width: '50%', padding: '20px', borderRadius: '10px', backgroundColor: '#fff', border: '2px solid #333' }}>
                    <CardContent>
                        <Typography variant='h4' sx={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Blogs</Typography>
                        <p><strong>UserId:</strong> {userId}</p>
                        <p><strong>Id:</strong> {Id}</p>
                        <p><strong>Title:</strong> {title}</p>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};

export default Home;
