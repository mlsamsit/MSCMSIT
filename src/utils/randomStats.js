// utils/randomStats.js
export const generateStats = () => {
  return {
    confidence: Math.floor(Math.random() * 41) + 60, // 60–100
    skills: Math.floor(Math.random() * 41) + 60,
    creativity: Math.floor(Math.random() * 41) + 60,
    teamwork: Math.floor(Math.random() * 41) + 60,
  };
};
