import React, {useEffect} from 'react';

type Person = {
    name: string;
    age: number | null;
};

type AverageAgeProps = {
    data: Person[];
};

const AverageAge: React.FC<AverageAgeProps> = ({ data }) => {
    const BABY_MAX_AGE = 3;
    const KID_MAX_AGE = 12;
    const TEENAGE_MAX_AGE = 17;
    const YOUNG_ADULT_MAX_AGE = 30;
    const ADULT_MAX_AGE = 55;

    const images = {
        babies: 'https://media.discordapp.net/attachments/703709686238543946/1164187320803659919/joacoague_group_of_babies_cbe7882f-3ca3-4def-a853-1ab40160c225.png?ex=65424cee&is=652fd7ee&hm=e9ede37cdfe7eb2326e5733f8068fcbace98567bfe5c153ecd927ab4c442fe17&=&width=910&height=910',
        kids: 'https://media.discordapp.net/attachments/703709686238543946/1164190864680165436/joacoague_group_of_kids_28abf4e7-239e-4d23-acbe-d3cdfd7effe8.png?ex=6542503b&is=652fdb3b&hm=196aab3c0dd32bf696695e943ce211f417a7c38c2554cade93b48934a5826bd0&=&width=910&height=910',
        teenagers: 'https://media.discordapp.net/attachments/703709686238543946/1164190972930965505/joacoague_group_of_teenagers_8c800299-2076-4a91-a2f8-e5c3fa24fd27.png?ex=65425055&is=652fdb55&hm=40512c9dd7b2c5c18ea9e44093e7b025b1403f2d99a5324e0dfce16bbae0a1db&=&width=910&height=910',
        youngAdults: 'https://media.discordapp.net/attachments/703709686238543946/1164194545316151436/joacoague_group_of_young_adults_3167c7bb-cb51-4691-aed7-6c6a07bf0ae5.png?ex=654253a9&is=652fdea9&hm=b041a736e037e00968b8c11bffd0ca2def476f31838612d695443edad1e45fef&=&width=910&height=910',
        adults: 'https://media.discordapp.net/attachments/703709686238543946/1164191078929412189/joacoague_group_of_adults_346c6a01-4f6b-4527-9a06-e8926f685fc5.png?ex=6542506e&is=652fdb6e&hm=223a601261aba6f973e97e9823a2ab4ab6f45ee19de495292c752124088e755a&=&width=910&height=910',
        elders: 'https://media.discordapp.net/attachments/703709686238543946/1164191140531154995/joacoague_group_of_old_mans_01a47dc7-ce36-448a-a9a0-b592e4efe429.png?ex=6542507d&is=652fdb7d&hm=6ffeb90f9f645f309346e1f614c685f775753e41eaa39ec549b180de0c87c7bb&=&width=910&height=910',
    }

    const [ageImage, setAgeImage] = React.useState<string>('');

    const validAges = data.filter(person => person.age !== null).map(person => person.age as number);
    const totalAge = validAges.reduce((acc, age) => acc + age, 0);

    // This if for rounding to 2 decimal places
    const averageAge = Math.round((totalAge / validAges.length) * 100) / 100;

    useEffect(() => {
        if (averageAge < BABY_MAX_AGE) {
            setAgeImage(images.babies)
        } else if (averageAge < KID_MAX_AGE) {
            setAgeImage(images.kids)
        } else if (averageAge < TEENAGE_MAX_AGE) {
            setAgeImage(images.teenagers)
        } else if (averageAge < YOUNG_ADULT_MAX_AGE) {
            setAgeImage(images.youngAdults)
        } else if (averageAge < ADULT_MAX_AGE) {
            setAgeImage(images.adults)
        } else if (averageAge >= ADULT_MAX_AGE) {
            setAgeImage(images.elders)
        }
    }, [averageAge])

    return (
        <div>
            {data.length > 0 ? `Average age is: ${averageAge}` : 'No person added yet'}
            {ageImage && <img src={ageImage} alt="age" />}
        </div>
    );
};

export default AverageAge;