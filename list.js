var pizzas = [
	{
		name: 'Alla Pollo',
		ingredients: ['sauce', 'cheese', 'smoked chicken', 'bell pepper', 'corn', 'pineapple'],
		prices: {
			'slim': {
				'18cm': 4.00,
				'28cm': 6.10
			},
			'pan': {
				'20cm': 4.80,
				'28cm': 6.80
			}
		},
		source: 'pappa-pizza'
	},
	{
		name: 'Amore Mio',
		ingredients: ['sauce', 'cheese', 'ham', 'bell pepper', 'pineapple'],
		prices: {
			'pan': {
				'20cm': 5.70,
				'28cm': 7.30
			}
		},
		source: 'pappa-pizza'
	},
	{
		name: 'Con Callina',
		ingredients: ['tex mex sauce', 'cheese', 'chicken', 'bell pepper', 'garlic', 'pineapple'],
		prices: {
			'slim': {
				'18cm': 4.00,
				'28cm': 6.10
			},
			'pan': {
				'20cm': 4.80,
				'28cm': 6.80
			}
		},
		source: 'pappa-pizza'
	},
	{
		name: 'Fantaasia',
		ingredients: ['sauce', 'cheese', 'SPECIAL_4_TOPPINGS'],
		prices: {
			'slim': {
				'18cm': 4.20,
				'28cm': 6.30
			},
			'pan': {
				'20cm': 5.00,
				'28cm': 7.00
			}
		},
		source: 'pappa-pizza'
	},
	{
		name: 'Margherita',
		ingredients: ['sauce', 'cheese'],
		prices: {
			'slim': {
				'18cm': 3.50,
				'28cm': 4.70
			},
			'pan': {
				'20cm': 4.10,
				'28cm': 5.40
			}
		},
		source: 'pappa-pizza'
	},
	{
		name: 'Marinara',
		ingredients: ['sauce', 'cheese', 'shrimp', 'crab sticks', 'bell pepper'],
		prices: {
			'slim': {
				'18cm': 4.00,
				'28cm': 6.10
			},
			'pan': {
				'20cm': 4.80,
				'28cm': 6.80
			}
		},
		source: 'pappa-pizza'
	},
	{
		name: 'Mexicana',
		ingredients: ['tex mex sauce', 'cheese', 'pepperoni', 'garlic', 'jalapeno', 'olives'],
		prices: {
			'slim': {
				'18cm': 4.00,
				'28cm': 6.10
			},
			'pan': {
				'20cm': 4.80,
				'28cm': 6.80
			}
		},
		note: 'spicy',
		source: 'pappa-pizza'
	},
	{
		name: 'Napoletana',
		ingredients: ['sauce', 'cheese', 'tuna', 'ham', 'bell pepper', 'onion', 'olives'],
		prices: {
			'slim': {
				'18cm': 4.00,
				'28cm': 6.10
			},
			'pan': {
				'20cm': 4.80,
				'28cm': 6.80
			}
		},
		source: 'pappa-pizza'
	},
	{
		name: 'Pappa Pizza',
		ingredients: ['sauce', 'cheese', 'bacon', 'bell pepper', 'pearl onion', 'peach', 'onion'],
		prices: {
			'slim': {
				'18cm': 3.90,
				'28cm': 5.90
			},
			'pan': {
				'20cm': 4.80,
				'28cm': 6.60
			}
		},
		source: 'pappa-pizza'
	},
	{
		name: 'Primavera',
		ingredients: ['sauce', 'cheese', 'smoked sausage', 'bell pepper', 'cucumber', 'eggs', 'olives'],
		prices: {
			'slim': {
				'18cm': 3.80,
				'28cm': 5.70
			},
			'pan': {
				'20cm': 4.60,
				'28cm': 6.60
			}
		},
		source: 'pappa-pizza'
	},
	{
		name: 'Quattro Stagioni',
		ingredients: ['sauce', 'cheese', 'pepperoni', 'ham', 'bell pepper', 'portobello mushrooms', 'pineapple'],
		prices: {
			'slim': {
				'18cm': 4.00,
				'28cm': 6.10
			},
			'pan': {
				'20cm': 4.80,
				'28cm': 6.80
			}
		},
		source: 'pappa-pizza'
	},
	{
		name: 'Salame',
		ingredients: ['sauce', 'cheese', 'salami', 'olives'],
		prices: {
			'slim': {
				'18cm': 3.90,
				'28cm': 5.90
			},
			'pan': {
				'20cm': 4.70,
				'28cm': 6.70
			}
		},
		source: 'pappa-pizza'
	},
	{ name: 'Sole Mio',
		ingredients: ['sauce', 'cheese', 'meatballs', 'bell pepper', 'portobello mushrooms', 'onion', 'salted mushrooms'],
		prices: {
			'slim': {
				'18cm': 3.80,
				'28cm': 5.60
			},
			'pan': {
				'20cm': 4.50,
				'28cm': 6.40
			}
		},
		source: 'pappa-pizza'
	},
	{
		name: 'Tropicana',
			ingredients: ['sauce', 'cheese', 'blue cheese', 'ham', 'pineapple'],
		prices: {
			'slim': {
				'18cm': 3.90,
				'28cm': 5.90
			},
			'pan': {
				'20cm': 4.70,
				'28cm': 6.70
			}
		},
		source: 'pappa-pizza'
	},
	{
		name: 'Vegetaria',
			ingredients: ['sauce', 'cheese', 'bell pepper', 'cucumber', 'brocoli', 'corn', 'olives'],
		prices: {
			'slim': {
				'18cm': 3.90,
				'28cm': 5.70
			},
			'pan': {
				'20cm': 4.60,
				'28cm': 6.60
			}
		},
		source: 'pappa-pizza'
	},
	{
		name: 'Rustica',
			ingredients: ['tex mex sauce', 'cheese', 'bbq minced meat', 'garlic', 'onion', 'jalapeno'],
		prices: {
			'slim': {
				'18cm': 4.00,
				'28cm': 6.10
			},
			'pan': {
				'20cm': 4.80,
				'28cm': 6.80
			}
		},
		source: 'pappa-pizza'
	},
	{
		name: 'Kebab',
			ingredients: ['sauce', 'cheese', 'kebab', 'onion', 'jalapeno'],
		prices: {
			'slim': {
				'18cm': 4.00,
				'28cm': 6.10
			},
			'pan': {
				'20cm': 4.80,
				'28cm': 6.80
			}
		},
		source: 'pappa-pizza'
	},
];

module.exports = pizzas;
