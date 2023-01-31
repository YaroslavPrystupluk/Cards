// Запозичена функція(трошки модифікована), яка замінює теги на безпечний аналог
function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;")
         .replace(/[(]/g, "")
         .replace(/[)]/g, "");
 }

 export default escapeHtml;