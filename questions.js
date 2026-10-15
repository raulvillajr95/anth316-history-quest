const questions = [
  {
    level: 0,
    question:
      'What is a major difference between Indigenous oral traditions and conventional Western historical approaches?',
    options: [
      'Oral traditions cannot preserve historical knowledge.',
      'All Indigenous nations understand history identically.',
      'Oral traditions can connect origins, identity, spirituality, and the past.',
      'Western historians never use oral accounts.',
    ],
    correct: 2,
    explanation:
      'Oral traditions can preserve historical knowledge while also expressing cultural identity, spiritual relationships, and collective memory.',
    source: 'The Earth Shall Weep, Chapter 1',
  },
  {
    level: 0,
    question:
      "What does the Okanogan story 'Creation of the Animal People' emphasize?",
    options: [
      'The earth and living beings are deeply interconnected.',
      'Human beings existed before the earth.',
      'Animals have no relationship with human life.',
      'European settlement created the natural world.',
    ],
    correct: 0,
    explanation:
      'The story describes the earth as a living mother from whom beings originate.',
    source: 'Creation of the Animal People',
  },
  {
    level: 1,
    question:
      'Which statement best describes North America before European contact?',
    options: [
      'The continent was largely uninhabited.',
      'Every Native nation used the same political system.',
      'Complex societies maintained agriculture, trade networks, and political institutions.',
      'Native peoples depended on European technology.',
    ],
    correct: 2,
    explanation:
      'Indigenous societies developed diverse economies, political systems, and networks before European colonization.',
    source: 'Blackhawk, Introduction and Chapters 1–4',
  },
  {
    level: 2,
    question:
      'How did disease and warfare interact during early European colonization?',
    options: [
      'They had little influence on Native societies.',
      'Together they destabilized communities and reshaped political relationships.',
      'They affected Europeans exclusively.',
      'They ended all Indigenous resistance.',
    ],
    correct: 1,
    explanation:
      'Blackhawk emphasizes that epidemics and warfare combined to transform Native communities and alliances.',
    source: 'Blackhawk, Chapter 3',
  },
  {
    level: 3,
    question: 'What did the Indian Removal Act of 1830 facilitate?',
    options: [
      'Full protection of Native homelands.',
      'The immediate end of federal Indian policy.',
      'The forced displacement of Native nations from eastern homelands.',
      'The restoration of all treaty lands.',
    ],
    correct: 2,
    explanation:
      'The act expanded federal authority to pursue removal, contributing to widespread dispossession.',
    source: 'Blackhawk, Chapter 7',
  },
  {
    level: 4,
    question: 'What was a central purpose of federal Indian boarding schools?',
    options: [
      'To preserve every Indigenous language.',
      'To assimilate Native children into dominant Euro-American society.',
      'To expand tribal sovereignty.',
      'To establish independent Native universities.',
    ],
    correct: 1,
    explanation:
      'Boarding schools were part of assimilation policies that separated children from families, languages, and cultural practices.',
    source: 'Blackhawk, Chapter 10',
  },
  {
    level: 5,
    question: 'What did the myth of Indigenous disappearance suggest?',
    options: [
      'Native nations continued shaping American history.',
      'Indigenous peoples were supposedly destined to vanish as American civilization advanced.',
      'Native peoples controlled all U.S. government institutions.',
      'Indigenous activism had ended.',
    ],
    correct: 1,
    explanation:
      'Blackhawk challenges historical narratives portraying Indigenous disappearance as inevitable.',
    source: 'Blackhawk, Chapter 11',
  },
];

const extraQuestions = [
  {
    level: 0,
    question: "What does 'The First Ship' reveal about historical perspective?",
    options: [
      'European arrival was understood identically by everyone.',
      'First contact could be interpreted through Indigenous experiences and beliefs.',
      'Indigenous peoples immediately adopted European governments.',
      'Oral narratives cannot describe encounters.',
    ],
    correct: 1,
    explanation:
      'The Chinook account describes an unfamiliar ship and its occupants from the perspective of the Clatsop community.',
    source: 'The First Ship',
  },
  {
    level: 0,
    question: 'What is ethnohistory especially useful for?',
    options: [
      'Studying only European political leaders.',
      'Replacing all oral histories with written documents.',
      'Combining historical and anthropological approaches to understand cultures.',
      'Studying only prehistoric fossils.',
    ],
    correct: 2,
    explanation:
      'Ethnohistory draws on different forms of evidence, including historical records and cultural knowledge.',
    source: "Professor's study guide",
  },
  {
    level: 1,
    question: 'What crops appear in the Hiawatha origin narrative?',
    options: [
      'Rice, wheat, and barley',
      'Corn, beans, and squash',
      'Coffee, sugar, and tea',
      'Potatoes, oats, and rye',
    ],
    correct: 1,
    explanation:
      'The narrative describes corn, beans, squash, and tobacco among the gifts and teachings given to the Mohawk.',
    source: 'Hiawatha the Unifier',
  },
  {
    level: 1,
    question: "What does Blackhawk's account of Mandan villages demonstrate?",
    options: [
      'The Plains had no permanent settlements.',
      'Native economies depended entirely on Europeans.',
      'Large agricultural settlements supported extensive trade networks.',
      'All Plains peoples were nomadic.',
    ],
    correct: 2,
    explanation:
      'Mandan communities cultivated maize and participated in extensive regional trading networks.',
    source: 'Blackhawk, Chapter 4',
  },
  {
    level: 2,
    question:
      "What economic activity was central to New France's relationships with many Native nations?",
    options: [
      'Fur trading',
      'Industrial manufacturing',
      'Cotton plantations',
      'Gold mining',
    ],
    correct: 0,
    explanation:
      'Fur trading helped connect French settlements with Indigenous commercial and diplomatic networks.',
    source: 'Blackhawk, Chapter 3',
  },
  {
    level: 2,
    question:
      'What happened when European diseases and military conflict combined?',
    options: [
      'Native political relationships remained unchanged.',
      'Native communities experienced major demographic and political disruptions.',
      'All Native nations immediately disappeared.',
      'European colonization stopped.',
    ],
    correct: 1,
    explanation:
      'Disease, warfare, and displacement interacted to transform Native societies.',
    source: 'Blackhawk, Chapter 3',
  },
  {
    level: 3,
    question:
      "Why did the outcome of the Seven Years' War threaten Indigenous autonomy?",
    options: [
      'Native nations had all surrendered.',
      'The war ended European interest in American land.',
      'British victory encouraged greater settler interest in western lands.',
      'All Indigenous alliances were prohibited.',
    ],
    correct: 2,
    explanation:
      'British imperial victory increased settler expectations of western expansion, even though Native nations remained sovereign.',
    source: 'Blackhawk, Chapter 5',
  },
  {
    level: 3,
    question: "How did the War of 1812 affect Tecumseh's confederation?",
    options: [
      "It permanently secured the confederation's independence.",
      'Its defeat weakened coordinated resistance to U.S. expansion.',
      'It restored French rule in the Great Lakes.',
      'It ended the American Republic.',
    ],
    correct: 1,
    explanation:
      "The defeat of Tecumseh's confederation weakened hopes of using a British alliance to resist U.S. settlement.",
    source: 'Blackhawk, Chapter 7',
  },
  {
    level: 4,
    question:
      "Why was Toypurina's resistance at Mission San Gabriel historically significant?",
    options: [
      'It demonstrated that Tongva peoples accepted all Spanish policies.',
      'It reflected Indigenous opposition to mission encroachment and coercion.',
      'It established U.S. independence.',
      'It ended the Spanish empire.',
    ],
    correct: 1,
    explanation:
      'Toypurina and Nicolás José participated in resistance against the mission system in 1785.',
    source: 'Blackhawk, Chapter 8',
  },
  {
    level: 4,
    question: 'How did the Civil War strengthen federal power in the West?',
    options: [
      'It eliminated the federal government.',
      'It ended settlement across western territories.',
      'Wartime mobilization expanded national institutions and capacity.',
      'It transferred all federal lands to Native nations.',
    ],
    correct: 2,
    explanation:
      'Blackhawk connects Civil War mobilization to expanded federal authority, infrastructure, and western settlement.',
    source: 'Blackhawk, Chapter 9',
  },
  {
    level: 5,
    question: 'What did Laura Cornelius Kellogg advocate?',
    options: [
      'The inevitable disappearance of Indigenous nations.',
      'Stronger Indigenous self-determination and economic institutions.',
      'The abolition of all Native governments.',
      'An end to Native political activism.',
    ],
    correct: 1,
    explanation:
      'Kellogg challenged assimilationist narratives and advocated Indigenous governance and economic development.',
    source: 'Blackhawk, Chapter 11',
  },
  {
    level: 5,
    question: 'What is the significance of the Indian Citizenship Act of 1924?',
    options: [
      'It automatically restored every treaty territory.',
      'It extended U.S. citizenship to Native Americans born in the United States.',
      'It abolished all tribal governments.',
      'It ended every form of discrimination.',
    ],
    correct: 1,
    explanation:
      'The act extended U.S. citizenship but did not eliminate discrimination or erase tribal political identities.',
    source: 'Blackhawk, Introduction',
  },
];

questions.push(...extraQuestions);

const finalQuestions = [
  // CHAPTER 1: HISTORY & ORAL TRADITIONS
  {
    level: 0,
    question:
      'How can Western films influence public understanding of Native American history?',
    options: [
      'They always accurately reconstruct Native perspectives.',
      'They can reinforce stereotypes and narratives of inevitable westward progress.',
      'They eliminate the need for historical research.',
      'They represent every Indigenous nation equally.',
    ],
    correct: 1,
    explanation:
      'The Western genre often presents settlement as progress while marginalizing Indigenous perspectives.',
    source: "Professor's study guide: Western genre",
  },
  {
    level: 0,
    question:
      'Why should historians examine both oral traditions and archaeological evidence?',
    options: [
      'They provide different forms of knowledge that can complement one another.',
      'Archaeology proves all oral traditions false.',
      'Oral traditions contain no historical information.',
      'Both methods always produce identical conclusions.',
    ],
    correct: 0,
    explanation:
      'Oral traditions preserve cultural knowledge and historical memory; archaeology investigates material evidence.',
    source: 'The Earth Shall Weep, Chapter 1',
  },
  {
    level: 0,
    question: 'What is a major theme of the White Buffalo Woman narrative?',
    options: [
      'The superiority of European religion.',
      'The importance of sacred teachings, ceremonies, and relationships with the buffalo.',
      'The disappearance of Indigenous spiritual practices.',
      'The establishment of the American government.',
    ],
    correct: 1,
    explanation:
      'White Buffalo Woman brings the sacred pipe and teachings central to Lakota ceremonial life.',
    source: 'The White Buffalo Woman',
  },

  // CHAPTER 2: BEFORE 1491
  {
    level: 1,
    question: 'What is the significance of the Haudenosaunee Confederacy?',
    options: [
      'It was founded by European colonists.',
      'It created political cooperation among distinct Indigenous nations.',
      'It eliminated all Indigenous languages.',
      'It prohibited diplomacy.',
    ],
    correct: 1,
    explanation:
      'The confederacy united nations through shared political institutions, diplomacy, and principles of peace.',
    source: 'Hiawatha the Unifier; The Earth Shall Weep',
  },
  {
    level: 1,
    question: 'What was Cahokia?',
    options: [
      'A Spanish mission in California.',
      'A major Mississippian urban and ceremonial center.',
      'A British military fort.',
      'A nineteenth-century boarding school.',
    ],
    correct: 1,
    explanation:
      'Cahokia illustrates the scale and complexity of pre-contact Mississippian societies.',
    source: "Professor's study guide: major civilizations",
  },
  {
    level: 1,
    question:
      'Why were Indigenous agricultural innovations historically significant?',
    options: [
      'They supported populations, trade, and complex societies.',
      'They were introduced exclusively by Europeans.',
      'They prevented permanent settlements.',
      'They were identical across all Indigenous nations.',
    ],
    correct: 0,
    explanation:
      'Agricultural practices supported diverse Indigenous communities and regional economies.',
    source: 'Blackhawk, Chapter 4',
  },

  // CHAPTER 3: CONTACT & COLONIZATION
  {
    level: 2,
    question: 'What distinguished Spanish mission colonization in California?',
    options: [
      'It involved no religious institutions.',
      'It combined religious conversion, labor control, and territorial expansion.',
      'It prohibited European settlement.',
      'It preserved complete Indigenous independence.',
    ],
    correct: 1,
    explanation:
      'Spanish missions combined religious and imperial objectives while imposing substantial controls on Indigenous communities.',
    source: 'Blackhawk, Chapter 8',
  },
  {
    level: 2,
    question:
      'How did European trade goods affect relationships among Native nations?',
    options: [
      'They always eliminated warfare.',
      'They had no political consequences.',
      'Access to weapons and trade networks could alter alliances and power.',
      'They immediately ended Indigenous commerce.',
    ],
    correct: 2,
    explanation:
      'Trade relationships, especially involving weapons, reshaped regional competition and diplomatic alliances.',
    source: 'Blackhawk, Chapter 3',
  },
  {
    level: 2,
    question:
      'Why is it misleading to describe colonization as a single uniform European process?',
    options: [
      'Different empires pursued varying economic, religious, and territorial strategies.',
      'All European empires used identical policies.',
      'European governments never competed.',
      'Native nations never negotiated with Europeans.',
    ],
    correct: 0,
    explanation:
      'Spanish, French, English, and Russian expansion differed by region and objective, although their systems could share coercive practices.',
    source: "Professor's study guide: European colonization",
  },

  // CHAPTER 4: REVOLUTION & REMOVAL
  {
    level: 3,
    question:
      'What was a major consequence of the American Revolution for many Native nations?',
    options: [
      'All treaties were permanently honored.',
      'The new United States increasingly pursued Indigenous lands.',
      'Native nations immediately gained representation in Congress.',
      'Western settlement stopped.',
    ],
    correct: 1,
    explanation:
      'American independence intensified struggles over land and sovereignty, despite continued Indigenous resistance.',
    source: 'Blackhawk, Chapters 5–7',
  },
  {
    level: 3,
    question: 'What does the Trail of Tears represent?',
    options: [
      'A voluntary trade expedition.',
      'The forced removal of Cherokee people from their homelands.',
      'The founding of the Haudenosaunee Confederacy.',
      'A European religious pilgrimage.',
    ],
    correct: 1,
    explanation:
      'The Trail of Tears refers to forced Cherokee removal, during which thousands died.',
    source: 'Blackhawk, Chapter 7',
  },
  {
    level: 3,
    question: 'Why did treaties not always protect Native sovereignty?',
    options: [
      'Native nations never negotiated treaties.',
      'U.S. authorities frequently violated or coerced treaty agreements.',
      'Treaties automatically prohibited settlement.',
      'Treaties had no relationship to land.',
    ],
    correct: 1,
    explanation:
      'Treaty guarantees were frequently undermined by federal and state expansion, coercion, and violations.',
    source: 'Blackhawk, Chapter 7',
  },

  // CHAPTER 5: WESTWARD EXPANSION
  {
    level: 4,
    question:
      'What did nineteenth-century scientific racism attempt to justify?',
    options: [
      'The equality of all political communities.',
      'Racial hierarchies presented as scientific facts.',
      'The protection of every Indigenous language.',
      'The abolition of racial categories.',
    ],
    correct: 1,
    explanation:
      'Scientific racism used claims of biological hierarchy to rationalize discrimination and colonial domination.',
    source: "Professor's study guide: race and science",
  },
  {
    level: 4,
    question: 'What was the Ghost Dance?',
    options: [
      'A European military strategy.',
      'An Indigenous religious movement expressing spiritual renewal and hope.',
      'A federal boarding-school curriculum.',
      'A Spanish missionary organization.',
    ],
    correct: 1,
    explanation:
      'The Ghost Dance was a spiritual revitalization movement that offered hope amid dispossession and colonial violence.',
    source: "Professor's study guide: Ghost Dance",
  },
  {
    level: 4,
    question: "What did Richard Henry Pratt's assimilation philosophy seek?",
    options: [
      'To strengthen Indigenous languages and political independence.',
      'To transform Native children by suppressing their Indigenous cultural identities.',
      'To end compulsory education.',
      'To establish tribal universities.',
    ],
    correct: 1,
    explanation:
      "Pratt's boarding-school approach sought cultural assimilation through separation from families and Indigenous practices.",
    source: 'Blackhawk, Chapter 10',
  },

  // CHAPTER 6: IDENTITY & SOVEREIGNTY
  {
    level: 5,
    question: 'Why is U.S. citizenship different from tribal sovereignty?',
    options: [
      'Citizenship and sovereignty are identical.',
      'Citizenship concerns individual political membership; sovereignty concerns collective self-government.',
      'Tribal sovereignty means having no political institutions.',
      'Citizenship automatically terminates every treaty.',
    ],
    correct: 1,
    explanation:
      'Individual U.S. citizenship does not inherently eliminate the political status and governing authority of tribal nations.',
    source: 'Blackhawk, Introduction and Chapter 11',
  },
  {
    level: 5,
    question:
      'What is the central problem with portraying Native Americans as a vanished people?',
    options: [
      'It ignores continuing Indigenous communities, political action, and cultural survival.',
      'It gives too much attention to Indigenous activism.',
      'It accurately describes every Native nation.',
      'It proves that colonization never occurred.',
    ],
    correct: 0,
    explanation:
      'The disappearance narrative erases ongoing Indigenous survival and sovereignty.',
    source: 'Blackhawk, Chapter 11',
  },
];

questions.push(...finalQuestions);

questions.push({
  level: 5,
  question:
    'Why did the Society of American Indians challenge dominant narratives about Native peoples?',
  options: [
    'They believed Indigenous cultures had disappeared.',
    'They advocated Native political participation, reform, and continued Indigenous identity.',
    'They supported eliminating all tribal governments.',
    'They argued that Native history should be excluded from U.S. history.',
  ],
  correct: 1,
  explanation:
    'The Society of American Indians challenged stereotypes and advocated reforms while asserting the continued presence and political agency of Native peoples.',
  source: 'Blackhawk, Chapter 11',
});

for (let level = 0; level < 6; level++) {
  const count = questions.filter((q) => q.level === level).length;
  console.log(`Chapter ${level + 1}: ${count} questions`);
}

console.log(`Total: ${questions.length} questions`);
