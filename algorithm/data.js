export const data = [
    {
        name: "a",
        children: [
            { name: "a1", children: [{ name: "a11" }, { name: "a12" }] },
            { name: "a2", children: [{ name: "a21" }, { name: "a22" }] },
            {
                name: "a3",
                children: [
                    { name: "a31" },
                    {
                        name: "a32",
                        children: [
                            {
                                name: "b",
                                children: [
                                    {
                                        name: "b1",
                                        children: [
                                            { name: "b11" },
                                            { name: "b12" }
                                        ]
                                    },
                                    {
                                        name: "b2",
                                        children: [
                                            { name: "b21" },
                                            { name: "b22" }
                                        ]
                                    },
                                    {
                                        name: "b3",
                                        children: [
                                            { name: "b31" },
                                            { name: "b32" }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
