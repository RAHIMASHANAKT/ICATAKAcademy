import React from 'react';
import { Box, Typography, Card, CardContent, Stack, Input, InputLabel, TextareaAutosize, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BlogForm = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f0f0f0', padding: '20px' }}>
            <Card sx={{ backgroundColor: '#fff', padding: '20px', width: '50%', minWidth: '300px', border: '2px solid #333', borderRadius: '10px' }}>
                <CardContent>
                    <Typography variant='h4' sx={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Add Blog</Typography>
                    <Stack spacing={2}>
                        <InputLabel htmlFor="blogName">Blog Name:</InputLabel>
                        <Input variant='outlined' type="text" id="blogName" name="blogName" fullWidth />

                        <InputLabel htmlFor="authorName">Author Name:</InputLabel>
                        <Input variant='outlined' type="text" id="authorName" name="authorName" fullWidth />

                        <InputLabel htmlFor="description">Description:</InputLabel>
                        <TextareaAutosize variant='outlined' id="description" name="description" minRows={5} fullWidth />

                        <Button
                            variant='contained'
                            onClick={() => { navigate('/home') }}
                            sx={{ marginTop: '20px', width: '100%' }}
                        >
                            Submit Blog
                        </Button>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
};

export default BlogForm;
