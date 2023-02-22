function generateDifficultyLevel(currentLevel) {
    const difficulties = [
        { key: 1, label: '1 - Very Easy', selected: false },
        { key: 2, label: '2 - Easy', selected: false },
        { key: 3, label: '3 - Medium (Standard 3x3)', selected: false },
        { key: 4, label: '4 - Intermediate', selected: false },
        { key: 5, label: '5 - Expert', selected: false },
        { key: 6, label: '6 - Hardcore', selected: false },
    ];
    return difficulties.map((x) => {
        if (x.key === currentLevel) x.selected = true;
        return x;
    });
}

module.exports = generateDifficultyLevel;