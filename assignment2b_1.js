function translateText() {
  const apiKey = 'YourAPIKey';
  const url = 'https://api.openai.com/v1/chat/completions';

  const textInput = document.getElementById('textInput').value;
  const targetLang = document.getElementById('languageInput').value; // 正确获取目标语言输入框的值
  const promptText = `Translate the following text to ${targetLang}:`;

  const data = {
    model: "gpt-3.5-turbo",
    messages: [{
      role: "system",
      content: promptText
    },{
      role: "user",
      content: textInput
    }],
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
      console.log(data);
      document.getElementById('translationResult').textContent = data.choices[0].message.content;
  })
  .catch(error => console.error('Error:', error));
}
