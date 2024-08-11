'use client';
import React, { use, useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

export default function ContactComponent() {
    const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Box className="w-full max-w-2xl mx-auto mb-4">
      <form onSubmit={null} className="space-y-6">
        <TextField
          fullWidth
          label="メールアドレス"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="お名前"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="お問い合わせ内容"
          variant="outlined"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          送信
        </Button>
      </form>
    </Box>
  );
}
