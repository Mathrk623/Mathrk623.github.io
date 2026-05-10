// 共通のヘッダーを作成する関数
function createHeader() {
    const header = document.createElement('header');
    const currentPath = window.location.pathname; // 現在のURLパスを取得

    header.innerHTML = `
        <h1><a href="/">My Math Notes</a></h1>
        <nav>
            <ul>
                <li><a href="/" class="${currentPath === '/' ? 'active' : ''}">Home</a></li>
                <li><a href="/notes/" class="${currentPath.includes('/notes/') ? 'active' : ''}">Notes</a></li>
                <li><a href="/memo/" class="${currentPath.includes('/memo/') ? 'active' : ''}">Memo</a></li>
                <li><a href="/resources/" class="${currentPath.includes('/resources/') ? 'active' : ''}">Resources</a></li>
            </ul>
        </nav>
    `;
    document.body.prepend(header);
}

// 共通のフッターを作成する関数
function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `<p>&copy; 2024 Your Name - Built with MathJax</p>`;
    document.body.appendChild(footer);
}

// ページ読み込み時に実行
window.onload = function() {
    createHeader();
    createFooter();
};
