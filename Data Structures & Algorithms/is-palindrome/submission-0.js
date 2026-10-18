class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let text = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
        let i = 0;
        let j = text.length - 1;

        while(i < j){
            if(text[i++] != text[j--]){
                return false;
            }
        }

        return true;

    }
}
