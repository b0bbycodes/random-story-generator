const text = [
  " There once lived an old man and an old woman who were peasants and had to work hard to earn their daily bread. The old man used to go to fix fences and do other odd jobs for the farmers around, and while he was gone the old woman, his wife, did the work of the house and worked in their own little plot of land.",
  "   They rushed out the door, grabbing anything and everything they could think of they might need. There was no time to double-check to make sure they weren't leaving something important behind. Everything was thrown into the car and they sped off. Thirty minutes later they were safe and that was when it dawned on them that they had forgotten the most important thing of all. ",
  "She looked at her student wondering if she could ever get through. 'You need to learn to think for yourself,' she wanted to tell him. 'Your friends are holding you back and bringing you down.' But she didn't because she knew his friends were all that he had and even if that meant a life of misery, he would never give them up.",
  "Then came the night of the first falling star. It was seen early in the morning, rushing over Winchester eastward, a line of flame high in the atmosphere. Hundreds must have seen it and taken it for an ordinary falling star. It seemed that it fell to earth about one hundred miles east of him.",
  "The leather jacket showed the scars of being his favorite for years. It wore those scars with pride, feeling that they enhanced his presence rather than diminishing it. The scars gave it character and had not overwhelmed to the point that it had become ratty. The jacket was in its prime and it knew it.",
  "He had done everything right. There had been no mistakes throughout the entire process. It had been perfection and he knew it without a doubt, but the results still stared back at him with the fact that he had lost.",
  "There was once a hare who was friends with a tortoise. One day, he challenged the tortoise to a race. Seeing how slow the tortoise was going, the hare thought he’ll win this easily. So he took a nap while the tortoise kept on going. When the hare woke up, he saw that the tortoise was already at the finish line. Much to his chagrin, the tortoise won the race while he was busy sleeping.",
  "Once there was a dog who wandered the streets night and day in search of food. One day, he found a big juicy bone and he immediately grabbed it between his mouth and took it home. On his way home, he crossed a river and saw another dog who also had a bone in its mouth. He wanted that bone for himself too. But as he opened his mouth, the bone he was biting fell into the river and sank. That night, he went home hungry.",
  "After flying a long distance, a thirsty crow was wandering the forest in search of water. Finally, he saw a pot half-filled with water. He tried to drink from it but his beak wasn’t long enough to reach the water inside. He then saw pebbles on the ground and one by one, he put them in the pot until the water rose to the brim. The crow then hastily drank from it and quenched his thirst.",
  "There was a boy named John who was so lazy, he couldn’t even bother to change his clothes. One day, he saw that the apple tree in their yard was full of fruits. He wanted to eat some apples but he was too lazy to climb the tree and take the fruits. So he lay down underneath the tree and waited for the fruits to fall off. John waited and waited until he was very hungry but the apples never fell.",
  "Once there was a hungry fox who stumbled upon a vineyard. After seeing the round, juicy grapes hanging in a bunch, the fox drooled. But no matter how high he jumped, he couldn’t reach for it. So he told himself that it was probably sour and left. That night, he had to sleep on an empty stomach.",
  "The ant and the grasshopper were good friends. In the summer, the ant works hard to fill his storage with food. While the grasshopper was enjoying the fine weather and playing all day. When winter came, the ant was lying cozily in his home surrounded by the food he stored during the summer. While the grasshopper was in his home, hungry and freezing. He asked the ant for food and the ant gave him some. But it wasn’t enough to last the entire winter. When he tried to ask the ant again, the latter replied: 'I’m sorry my friend but my food is just enough for my family to last until the end of winter. If I give you more, we too will starve. We had the entire summer to prepare for the winter but you chose to play instead.'",
  "There was once a shepherd boy who liked to play tricks. One day, while he was watching over the herd, the boy decided to play a trick and cried “wolf! wolf!”. The people who heard rushed over to help him. But they were disappointed when they saw that there was no wolf and the boy was laughing at them. The next day, he did it again and people rushed to his aid only to be disappointed once again. On the third day, the boy saw a wolf devouring one of his sheep and cried for help. But the people who heard him thought this is just another of the boy’s pranks so no one came to help him. That day, the boy lost some of his sheep to the wolf.",
  "There was once a proud elephant who always bullied smaller animals. He would go to the anthill near his home and spray water at the ants. The ants, with their size, could do nothing but cry. The elephant just laughed and threatened the ants that he would crush them to death. One day, the ants had enough and decided to teach the elephant a lesson. They went straight into the elephant’s trunk and started biting him. The elephant could only howl in pain. He realized his mistake and apologized to the ants and all the animals he bullied.",
  "There was once a slave who was treated cruelly by his master. One day, he couldn’t take it anymore and ran away to the forest to escape. There he chanced upon a lion who couldn’t walk because of the thorn in its paw. Although he’s scared, the slave mustered his courage and took out the thorn in the lion’s paw. When the lion was finally free of the thorn, he ran into the forest and didn’t harm the slave. Sometime later, the slave was caught by his master along with some animals in the forest. The master then ordered the slave to be thrown into the lion’s den. When the slave saw the lion, he recognized it as the same lion he helped in the forest. The slave was able to escape the den unharmed and he freed all the other animals.",
  "Most of us have probably heard of this story as this is one of the most popular fairy tales in the world. The story revolves around a duckling who from the moment of his birth has always felt different from his siblings. He was always picked on because he didn’t look like the rest of them. One day, he had enough and ran away from the pond he grew up in. He wandered near and far looking for a family who would accept him. Months passed and seasons changed but everywhere he went, nobody wanted him because he was such an ugly duck. Then one day, he came upon a family of swans. Upon looking at them, he realized that during the months he spent looking for a family to call his own, he had grown into a beautiful swan. Now he finally understood why he never looked like the rest of his siblings because he isn’t a duck but a swan."


];

const form = document.querySelector('.lorem-form');
const amount = document.querySelector('#amount');
const result = document.querySelector('.lorem-text');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * text.length);
    console.log(value);
    // result.innerHTML = text[value]
    if(isNaN(value) || value <= 0 || value > 10){
        result.innerHTML = `<p class="result"> ${text[random]} </p>`
    }else{
        let tempText = text.slice(0,value);
       tempText = tempText.map((item) => {
        

            return `<p class="result"> ${item} </p>`;
        }).join("");
        console.log(tempText);

        result.innerHTML = tempText
        

        
       

    }
})