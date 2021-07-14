let MAX = 26;
       
    // Function to print the frequency
    // of each of the characters of
    // s in alphabetical order
    function compressString(s, n)
    {
        // To store the frequency
        // of the characters
        let freq = new Array(MAX);
        freq.fill(0);
    
        // Update the frequency array
        for (let i = 0; i < n; i++)
        {
            freq[s[i].charCodeAt() - 'a'.charCodeAt()]++;
        }
    
        // Print the frequency in alphatecial order
        for (let i = 0; i < MAX; i++)
        {
    
            // If the current alphabet doesn't
            // appear in the string
            if (freq[i] == 0)
                continue;
    
            console.log(String.fromCharCode(i +
                'a'.charCodeAt()) +""+ freq[i]);
        }
    }
    
    let s = "geeksforgeeks";
    let n = s.length;

    compressString(s, n);