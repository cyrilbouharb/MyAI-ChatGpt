import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {duotoneDark} from 'react-syntax-highlighter/dist/esm/styles/prism';

function extractCodeFromString(message: string) {
  const codeBlocks = [];
  const regex = /```(\w+)?\n?([\s\S]*?)```/g; // This regex matches the code block with optional language specifier
  let match;

  while (match = regex.exec(message)) {
    const language = match[1] || 'javascript'; // Default to JavaScript if no language specified
    const code = match[2].trim(); // Trim the code block to remove unnecessary spaces
    codeBlocks.push({ language, code });
  }

  return codeBlocks;
};


function isCodeBlock(str: string) {
  // More sophisticated checks for actual code lines
  const likelyCodeIndicators = ['function', '{', '}', ';', '=>', 'var ', 'let ', 'const ', '= function', 'console.log', 'return'];
  const codeLineRegex = new RegExp(likelyCodeIndicators.join('|'), 'i');
  return codeLineRegex.test(str);
}

const ChatItem = ({content, role}:{content:string, role:"user"|"assistant"}) => {
  const messageBlocks = extractCodeFromString(content);
  const auth = useAuth();
  return role === "assistant" ? (<Box sx={{display:'flex', p:2, bgcolor:'#e3e3e3',  my:2, gap:2}}>
    <Avatar sx={{ml:'0'}}>
        <img src='openai.png' alt='openai' width={'30px'} />
    </Avatar>
    <Box>
      {messageBlocks && messageBlocks.length > 0 ? (
        messageBlocks.map((block, index) => (
          isCodeBlock(block.code) ? (
            <SyntaxHighlighter style={duotoneDark} language={block.language} key={index}>
              {block.code}
            </SyntaxHighlighter>
          ) : (
            <Typography sx={{ fontSize: "20px" }} key={index}>{`${block.language}\n${block.code}`}</Typography>
          )
        ))
      ) : (
        <Typography sx={{ fontSize: "20px" }}>{content}</Typography>
      )}
    </Box>
    </Box>
  ) : ( <Box sx={{display:'flex', p:2, bgcolor:'#b4b4b4',gap:2, my: 2}}>
  <Avatar sx={{ml:'0', bgcolor:'black', color:'white'}}>
        {auth?.user?.name[0]}
        {auth?.user?.name.split(" ")[1][0]}
  </Avatar>
  <Box>
      {messageBlocks && messageBlocks.length > 0 ? (
        messageBlocks.map((block, index) => (
          isCodeBlock(block.code) ? (
            <SyntaxHighlighter style={duotoneDark} language={block.language} key={index}>
              {block.code}
            </SyntaxHighlighter>
          ) : (
            <Typography sx={{ fontSize: "20px" }} key={index}>{`${block.language}\n${block.code}`}</Typography>
          )
        ))
      ) : (
        <Typography sx={{ fontSize: "20px" }}>{content}</Typography>
      )}
    </Box>
  </Box>);

};

export default ChatItem;