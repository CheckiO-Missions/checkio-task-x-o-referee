"""
TESTS is a dict with all you tests.
Keys for this will be categories' names.
Each test is dict with
    "input" -- input data for user function
    "answer" -- your right answer
    "explanation" -- not necessary key, it's using for additional info in animation.
"""

TESTS = {
    "1. Basics": [
        {
            "input": ["X.O",
                      "XX.",
                      "XOO"],
            "answer": "X",
            "explanation": [1, [0, 0.5], [3, 0.5]]
        },
        {
            "input": ["OO.",
                      "XOX",
                      "XOX"],
            "answer": "O",
            "explanation": [0, [0, 1.5], [3, 1.5]]
        },
        {
            "input": ["OOX",
                      "XXO",
                      "OXX"],
            "answer": "D",
            "explanation": []
        },
        {
            "input": ["O.X",
                      "XX.",
                      "XOO"],
            "answer": "X",
            "explanation": [1, [3, 0], [0, 3]]
        },
    ],
    "2. Extra": [
        {
            "input": ["OOO",
                      "XX.",
                      ".XX"],
            "answer": "O",
            "explanation": [0, [0.5, 0], [0.5, 3]]
        },
        {
            "input": ["OXO",
                      "XOX",
                      "OXO"],
            "answer": "O",
            "explanation": [0, [0, 0], [3, 3]]
        },
        {
            "input": ["XOX",
                      "OXO",
                      "XOX"],
            "answer": "X",
            "explanation": [1, [3, 0], [0, 3]]
        },
        {
            "input": ["OXO",
                      "XXO",
                      "XOX"],
            "answer": "D",
            "explanation": []
        },
        {
            "input": [".O.",
                      "XXX",
                      ".O."],
            "answer": "X",
            "explanation": [1, [1.5, 0], [1.5, 3]]
        },
        {
            "input": ['...',
                      'XXX',
                      'OO.'],
            "answer": "X",
            "explanation": [1, [1.5, 0], [1.5, 3]]
        },
    ],
    "3. Extra": [

        {
            "input": ['OOO',
                      'X.X',
                      '.X.'],
            "answer": "O",
            "explanation": [0, [0.5, 0], [0.5, 3]]
        },
        {
            "input": ['O..',
                      'XOX',
                      '..O'],
            "answer": "O",
            "explanation": [0, [0, 0], [3, 3]]
        },
        {
            "input": ['..O',
                      'XOX',
                      'O..'],
            "answer": "O",
            "explanation": [0, [0, 3], [3, 0]]
        },
        {
            "input": ['.XO',
                      'X.X',
                      'OOO'],
            "answer": "O",
            "explanation": [0, [2.5, 0], [2.5, 3]]
        },
        {
            "input": ['.XO',
                      'X.X',
                      'O.O'],
            "answer": "D",
            "explanation": []
        },
        {
            "input": [".OX",
                      ".XX",
                      ".OO"],
            "answer": "D",
            "explanation": []
        },
        {
            "input": ["...",
                      ".X.",
                      "..."],
            "answer": "D",
            "explanation": []
        },
        {
            "input": [".O.",
                      ".X.",
                      "..."],
            "answer": "D",
            "explanation": []
        },
        {
            "input": [".O.",
                      "...",
                      "..."],
            "answer": "D",
            "explanation": []
        },
        {
            "input": [".OX",
                      "..X",
                      ".OX"],
            "answer": "X",
            "explanation": [1, [0, 2.5], [3, 2.5]]
        },


    ]
}
