/**
 * Seminar 2.5 Simple Trie
 */


class TrieNode {
    constructor(key) {
        this.key = key;
        this.children = {};
        this.isWord = false;
    }
}


class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }

    insert(word) {
        // TODO Insert word symbol by symbol
        let node = this.root
        for( let i = 0 ; i < word.length ; i++ ){
            const symbol = word[ i ]
            if (!node.children[ symbol ]){
                node.children[ symbol ] = new TrieNode( symbol )
            }
            node = node.children[ symbol ]
            //if ( i == word.length - 1)
            //    node.isWord = true
        }
        node.isWord = true

    }

    hasNode(word){
        // TODO Check is word in Trie
        let node = this.root;

        // Идём по дереву символ за символом
        for (let i = 0; i < word.length; i++) {
            const symbol = word[i];

            // Если символа нет среди дочерних узлов — слова нет в Trie
            if (!node.children[symbol]) {
                return false;
            }

            node = node.children[symbol];
        }

        // Дошли до конца слова — проверяем флаг isWord
        // Важно: "ca" не должен находиться если вставляли только "cat"
        return node.isWord;
        //return false;
    }

    getAllNodes(){
        // TODO returns all nodes as array
        const result = [];

        // Рекурсивный обход дерева (DFS)
        function dfs(node, currentWord) {
            // Если узел отмечен как конец слова — добавляем в результат
            if (node.isWord) {
                result.push(currentWord);
            }

            // Рекурсивно обходим всех детей
            for (const symbol in node.children) {
                dfs(node.children[symbol], currentWord + symbol);
            }
        }

        // Запускаем обход с корня (пустая строка)
        dfs(this.root, '');

        return result;
        //return [];
    }
}

module.exports = { Trie };
