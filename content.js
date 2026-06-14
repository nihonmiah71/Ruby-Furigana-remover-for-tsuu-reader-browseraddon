(function() {
    // 1. Ruby-Tags bereinigen (Furigana entfernen)
    const rubies = document.querySelectorAll('ruby');
    rubies.forEach(ruby => {
        const rtsAndRps = ruby.querySelectorAll('rt, rp');
        rtsAndRps.forEach(el => el.remove());
        while (ruby.firstChild) {
            ruby.parentNode.insertBefore(ruby.firstChild, ruby);
        }
        ruby.parentNode.removeChild(ruby);
    });

    // CRUCIAL: Schweißt die zerhackten Text-Fragmente ("可愛" + "いい〜。") zu einem einzigen String zusammen!
    document.body.normalize();

    // 2. "middle-block" Paragraphen zusammenfassen
    const middleBlocks = document.querySelectorAll('p.middle-block');
    middleBlocks.forEach(block => {
        let rawText = block.textContent;
        let cleanText = rawText.replace(/["„“”「」]/g, '').trim();
        cleanText = cleanText.replace(/\s+/g, ' ');

        if (cleanText.length > 0) {
            block.textContent = cleanText;
        }
    });
})();