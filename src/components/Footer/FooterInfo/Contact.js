// 'use client';
// import React, { use, useState } from 'react';
// import { TextField, Button, Box } from '@mui/material';
// import { init, send } from 'emailjs-com';

// export default function ContactComponent() {
//     const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [content, setContent] = useState('');

//   const onSubmit = async(data) => {
//     event.preventDefault();

//     const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID
//     const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
//     const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

//     if (userId && serviceId && templateId) {

//         //emailjsを初期化する
//         init(userId)

//         //送信するデータを定義する
//         const params = {
//             name: name,
//             email: email,
//             content: content,
//         }

//         //送信する
//         try {
//             // 送信する
//             console.log(params)
//             await send(serviceId, templateId, params);
//             alert('送信が成功しました');
//             // フォームをリセット
//           } catch (error) {
//             console.error('送信に失敗しました:', error);
//             alert('送信に失敗しました。再度お試しください。');
//           }
//         } else {
//           console.error('EmailJSの設定が不足しています');
//         }
//     };

//   return (
//     <Box className="w-full max-w-2xl mx-auto mb-4">
//       <form onSubmit={onSubmit} className="space-y-6">
//         <TextField
//           fullWidth
//           label="メールアドレス"
//           variant="outlined"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <TextField
//           fullWidth
//           label="お名前"
//           variant="outlined"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <TextField
//           fullWidth
//           label="お問い合わせ内容"
//           variant="outlined"
//           multiline
//           rows={4}
//           value={content}
//           onChange={(e) => {
//             setContent(e.target.value);
//           }}
//           required
//         />
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           fullWidth
//         >
//           送信
//         </Button>
//       </form>
//     </Box>
//   );
// }
