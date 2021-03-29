const DUMMY_GROUPS = [
	{
    _id: 'grp001',
		name               : 'DevGroup1',
		img                : '/images/group1.jpg',
		projectDescription : 'This IS the project description for group this that and 1 2, hell. aere',
		isFeatured: true,
    users              : [
      {
				_id   : 'use001',
				name  : 'abella',
				email : 'developer@email.com',
				image : '/images/user1.jpg',
			},
			{
				_id   : 'use002',
				name  : 'Rome',
				email : 'developer@email.com',
				image : '/images/user2.jpg',
			},
		],
	},
	{
    _id: 'grp002',
		name               : 'DevGroup2',
		img                : '/images/group2.jpg',
		projectDescription : 'This IS the project description for group this that and 1 2, hell. aere, Creating a longer group description',
		isFeatured: false,
    users              : [
      {
				_id   : 'use003',
				name  : 'Leyton',
				email : 'developer@email.com',
				image : '/images/user3.jpg',
			},
			{
				_id   : 'use033',
				name  : 'Vita',
				email : 'developer@email.com',
				image : '/images/user4.jpg',
			},
		],
	},
	{
    _id: 'grp003',
		name               : 'DevGroup3',
		img                : '/images/group3.jpg',
		projectDescription : 'shor description',
		isFeatured: true,
    users              : [
      {
				_id   : 'use004',
				name  : 'Zen',
				email : 'developer@email.com',
				image : '/images/user5.jpg',
			},
			{
				_id   : 'use005',
				name  : 'August',
				email : 'developer@email.com',
				image : '/images/user6.jpg',
			},
		],
	},
	{
    _id: 'grp004',
		name               : 'DevGroup4',
		img                : '/images/group4.jpg',
		projectDescription : 'n/a',
		isFeatured: false,
    users              : [
      {
				_id   : 'use006',
				name  : 'Mace',
				email : 'developer@email.com',
				image : '/images/user7.jpg',
			},
			{
				_id   : 'use007',
				name  : 'Jupiter',
				email : 'developer@email.com',
				image : '/images/user8.jpg',
			},
		],
	},
	{
    _id: 'grp005',
		name               : 'DevGroup5',
		img                : '/images/group5.jpg',
		projectDescription : 'This is the project description for some group that cares way to much about creating a description for thier project y n the world would anyone write so much now lets be random sjdlfkjsldfkjsldkfjslkdjf sllsls jdj okay I think this is enough of a description don\'t you no. Okay new paragraph I\'m not botherd by the abslute lack of gramer are you sudden bye bye. ',
		isFeatured: true,
    users              : [
      {
				_id   : 'use008',
				name  : 'Oceana',
				email : 'developer@email.com',
				image : '/images/user9.jpg',
			},
			{
				_id   : 'use009',
				name  : 'Judd',
				email : 'developer@email.com',
				image : '/images/user10.jpg',
			},
		],
	},
];

const CONTRIBUTORS = [
	{
		_id: 'con001',
		name: 'CJ. Leverett',
		link: 'https://cjleverett.me'
	},
	{
		_id: 'con002',
		name: 'Tyler Jones',
		link: 'https://www.devtylerjones.com/'
	},
	{
		_id: 'con003',
		name: 'Samantha Aleman',
		link: 'https://www.linkedin.com/in/samantha-aleman-b83306b5/'
	},
	{
		_id: 'con004',
		name: 'Umberto Palazzo',
		link: 'https://www.linkedin.com/in/umberto-palazzo-93a86ba3/'
	},
	{
		_id: 'con005',
		name: 'Riley Slayden',
		link: 'https://www.rileyslayden.com/'
	}
]

const log = '/images/LOGO.jpg'

export const getFeaturedGroups = () => {
  return DUMMY_GROUPS.filter((group) => group.isFeatured);
}

const getAllGroups = () => {
  return DUMMY_GROUPS;
}

export const getAllContributors = () => {
	return CONTRIBUTORS
}

export const getGroupById = (id) => {
  return DUMMY_GROUPS.find((group) => group._id === id);
}

export const Logo = () => {
	return logo
}

export default getAllGroups