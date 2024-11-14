/*
    paragraphSchema = {
        id:,
        class: '',
        text: ''
    }

    sectionSchema = {
        id:,
        name: ''
        title: '',
        paragraphs: [paragraphSchema],
    }

    postSchema = {
        id:,
        title: '',
        short: '',
        sections: [sectionSchema]
        link: ''
        timestamp
    }
*/

/*
post = {
    id: Math.random(),
    title: 'Artrose en pijn',
    short: 'Katten zijn zo heerlijk eigenwijs - ook als ze artrose hebben!',
    sections: [
        {
            name: 'summary',
            title: 'Artrose en pijn',
            paragraphs: 'Katten zijn zo heerlijk eigenwijs - ook als ze artrose hebben! Jammer genoeg zijn ze van nature ook echte meesters in het verbergen van hun pijn of ongemak. Pijn is helaas een veelvoorkomend probleem bij katten. Maar katten laten niet duidelijk zien dat ze pijn hebben, waardoor dat vaak niet (direct) door eigenaren wordt opgemerkt - hoe goed ze hun kat ook kennen. Het goede nieuws is dat de pijn wel degelijk waar te nemen is, als je weet waar je naar moet kijken.'
        },
        {
            name: 'condition',
            title: 'Aandoening',
            paragraphs: 'Osteoarthritis is een ontstekingsziekte die in de loop van tijd steeds erger wordt. Osteoarthritis wordt in de volksmond ook vaak aangeduid als artrose of osteoartrose. \nEen kat met artrose heeft elke dag pijn. Dit vanwege de (schade veroorzaakt door de) ontstekingen die gepaard gaan met artrose. Artrose is de meest voorkomende oorzaak van chronische vorm van pijn bij katten. Wist je dat ongeveer twee op de drie katten ouder dan 6 jaar de gewrichtsaandoening osteoarthritis heeft?'
        }
    ],
    link: 'artrose',
    timestamp: ''
}
*/

export const posts = {
    cat: 
        {
            id: Math.random(),
            well: [],
            disease: [
                {
                    id: Math.random(),
                    title: 'Osteoarthritis and pain',
                    short: 'Cats are so stubborn – even if they have osteoarthritis!',
                    sections: [
                        {
                            name: 'summary',
                            title: 'Osteoarthritis and pain',
                            paragraphs: [
                                {
                                    class: '',
                                    text: "Cats are so stubborn – even if they have osteoarthritis! Unfortunately, they are also by nature real masters in hiding their pain or discomfort. Pain is a common problem in cats. But cats don’t clearly show that they are in pain, therefore it is often not (immediately) noticed by owners – no matter how well they know their cat. The good news is that you can identify the pain, if you know what to look at."
                                }
                            ]
                        },
                        {
                            name: 'condition',
                            title: 'condition',
                            paragraphs: [
                                {
                                    class: '',
                                    text: "Osteoarthritis is an inflammatory disease that is getting worse over time. Osteoarthritis is also popularly referred to as osteoarthritis or osteoarthritis."
                                },
                                {
                                    class: '',
                                    text: 
                                    "A cat with osteoarthritis has pain every day. This is due to the (damage caused by the) inflammation that are associated with osteoarthritis.",
                                },
                                {
                                    class: '',
                                    text: 
                                    "Osteoarthritis is the most common cause of chronic pain in cats. Did you know that about two in three cats over the age of 6 has the arthritis of osteoarthritis?",
                                },
                                {
                                    class: 'bold',
                                    text: "Fact: 2 in 3 cats have or suffer from osteoarthritis"
                                },
                                {
                                    class: '',
                                    text: "As I said, osteoarthritis is not just about pain. Osteoarthritis is an inflammatory disease that causes deterioration of the hips, knees, spine and other joints. The inflammation of osteoarthritis damages the entire joint. It causes swelling of the joint, breakdown of cartilage and abnormal bone growth."
                                },
                                {
                                    class: '',
                                    text: "For example, a cat with osteoarthritis suffers pain every day, and a normal life for the cat is getting a little more difficult. And the longer your cat is in pain, the more sensitive his/her nervous system becomes to pain. When the disease is not treated, the cat will experience more pain and the joints will deteriorate further."
                                },
                                {
                                    class: '',
                                    text: "The pain that a cat has of this seriously impedes the cat in daily life, every day. Fortunately, with proper treatment you can not only reduce the pain, but also inhibit the joint inflammation in your cat."
                                },
                            ]
                        }
                    ],
                    link: 'artrose',
                    timestamp: ''
                },
                {
                    id: Math.random(),
                    title: 'Chronische nierziekte',
                    short: 'Chronische nierziekte is een vervelende aandoening die bij veel katten voorkomt.',
                    sections: [
                        {
                            name: 'summary',
                            title: 'Chronische nierziekte',
                            paragraphs: [
                                {
                                    class: '',
                                    text: 'Chronische nierziekte (CNZ) is een vervelende aandoening die bij veel katten voorkomt. De ziekte is niet te genezen en vaak ook niet te voorkomen. Hoe eerder de ziekte kan worden ontdekt, hoe langer je met de juiste zorg je kat zo veel mogelijk kwaliteit van leven geven.'
                                }
                            ]                            
                        },
                        {
                            name: 'condition',
                            title: 'Aandoening',
                            paragraphs: [
                                {
                                    class: '',
                                    text: 'Osteoarthritis is een ontstekingsziekte die in de loop van tijd steeds erger wordt. Osteoarthritis wordt in de volksmond ook vaak aangeduid als artrose of osteoartrose. \nEen kat met artrose heeft elke dag pijn. Dit vanwege de (schade veroorzaakt door de) ontstekingen die gepaard gaan met artrose. Artrose is de meest voorkomende oorzaak van chronische vorm van pijn bij katten. Wist je dat ongeveer twee op de drie katten ouder dan 6 jaar de gewrichtsaandoening osteoarthritis heeft?'
                                }
                            ]                            
                        }
                    ],
                    link: 'nierziekte',
                    timestamp: ''
                },
                {
                    id: Math.random(),
                    title: 'Suikerziekte',
                    short: 'De meest voorkomende vorm van suikerziekte bij katten lijkt op diabetes type 2 bij mensen.',
                    sections: [
                        {
                            name: 'summary',
                            title: 'Diabetes mellitus',
                            paragraphs: 'Chronische nierziekte (CNZ) is een vervelende aandoening die bij veel katten voorkomt. De ziekte is niet te genezen en vaak ook niet te voorkomen. Hoe eerder de ziekte kan worden ontdekt, hoe langer je met de juiste zorg je kat zo veel mogelijk kwaliteit van leven geven.'
                        },
                        {
                            name: 'condition',
                            title: 'Aandoening',
                            paragraphs: 'Osteoarthritis is een ontstekingsziekte die in de loop van tijd steeds erger wordt. Osteoarthritis wordt in de volksmond ook vaak aangeduid als artrose of osteoartrose. \nEen kat met artrose heeft elke dag pijn. Dit vanwege de (schade veroorzaakt door de) ontstekingen die gepaard gaan met artrose. Artrose is de meest voorkomende oorzaak van chronische vorm van pijn bij katten. Wist je dat ongeveer twee op de drie katten ouder dan 6 jaar de gewrichtsaandoening osteoarthritis heeft?'
                        }
                    ],
                    link: 'nierziekte',
                    timestamp: ''
                },
                {
                    id: Math.random(),
                    title: 'Parasieten',
                    short: 'Denk aan vlooien, teken, wormen en mijten.',
                    sections: [
                        {
                            name: 'summary',
                            title: 'Parasieten bij de kat',
                            paragraphs: 'Chronische nierziekte (CNZ) is een vervelende aandoening die bij veel katten voorkomt. De ziekte is niet te genezen en vaak ook niet te voorkomen. Hoe eerder de ziekte kan worden ontdekt, hoe langer je met de juiste zorg je kat zo veel mogelijk kwaliteit van leven geven.'
                        },
                        {
                            name: 'condition',
                            title: 'Aandoening',
                            paragraphs: 'Osteoarthritis is een ontstekingsziekte die in de loop van tijd steeds erger wordt. Osteoarthritis wordt in de volksmond ook vaak aangeduid als artrose of osteoartrose. \nEen kat met artrose heeft elke dag pijn. Dit vanwege de (schade veroorzaakt door de) ontstekingen die gepaard gaan met artrose. Artrose is de meest voorkomende oorzaak van chronische vorm van pijn bij katten. Wist je dat ongeveer twee op de drie katten ouder dan 6 jaar de gewrichtsaandoening osteoarthritis heeft?'
                        }
                    ],
                    link: 'nierziekte',
                    timestamp: ''
                },

            ],
            blog: []
        }
    ,
    dog: [],
    bird: []
}