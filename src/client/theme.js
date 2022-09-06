const colors = new Map([
  ["--blue", "#1976d2"],
  ["--border", "#a7a7a7"],
  ["--disabled-bg", "rgba(0, 0, 0, 0.12)"],
  ["--disabled-color", "rgba(0, 0, 0, 0.5)"],
  ["--error", "#d32f2f"],
]);

/**
 * @param { property:string, color:string }
 * document :root 선택자의 변수 색을 변경하는 함수
 **/

const setProperty = (property, color) => {
  document.documentElement.style.setProperty(property, color);
};
for (const [property, color] of colors) setProperty(property, color);
