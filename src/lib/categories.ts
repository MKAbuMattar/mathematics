import {
  Calculator,
  Shapes,
  Compass,
  Triangle,
  Sigma,
  type LucideIcon,
} from 'lucide-react';

export type Category = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  topics: Topic[];
};

export type Topic = {
  slug: string;
  title: string;
  description: string;
};

export const categories: Category[] = [
  {
    slug: 'basics',
    title: 'Basics',
    description:
      'Foundations: powers, radicals, logarithms, polynomials, progressions, complex numbers, vectors, probability.',
    icon: Calculator,
    accent: 'from-cyan-500 to-sky-500',
    topics: [
      { slug: 'powers', title: 'Powers', description: 'Exponent rules and identities.' },
      { slug: 'radicals', title: 'Radicals', description: 'Roots, fractional exponents, simplification.' },
      { slug: 'logarithms', title: 'Logarithms', description: 'Log rules, change of base, natural log.' },
      {
        slug: 'quadratic-equations',
        title: 'Quadratic Equations',
        description: 'Quadratic formula, discriminant, factoring.',
      },
      { slug: 'polynomials', title: 'Polynomials', description: 'Expansion, factoring, special products.' },
      { slug: 'progression', title: 'Progression', description: 'Arithmetic and geometric series.' },
      { slug: 'complex-numbers', title: 'Complex Numbers', description: 'Imaginary unit, modulus, conjugate.' },
      { slug: 'vectors', title: 'Vectors', description: 'Magnitude, dot product, cross product.' },
      { slug: 'probability', title: 'Probability', description: 'Combinatorics, conditional probability, Bayes.' },
    ],
  },
  {
    slug: 'geometry',
    title: 'Geometry',
    description:
      'Areas, perimeters, surface areas, and volumes for 2D and 3D figures, with diagrams.',
    icon: Shapes,
    accent: 'from-emerald-500 to-teal-500',
    topics: [
      { slug: 'area', title: 'Area', description: 'Square, rectangle, triangle, circle, ellipse.' },
      { slug: 'perimeter', title: 'Perimeter', description: 'Perimeter of common 2D figures.' },
      { slug: 'surface-area', title: 'Surface Area', description: 'Cube, cylinder, sphere, cone, pyramid.' },
      { slug: 'volume', title: 'Volume', description: 'Volume of 3D solids.' },
      { slug: 'lateral-area', title: 'Lateral Area', description: 'Lateral surface formulas.' },
    ],
  },
  {
    slug: 'coordinate-geometry',
    title: 'Coordinate Geometry',
    description:
      'Distance, slope, and conic sections: circles, parabolas, ellipses, hyperbolas.',
    icon: Compass,
    accent: 'from-violet-500 to-purple-500',
    topics: [
      {
        slug: 'basics',
        title: 'Coordinate Geometry Basics',
        description: 'Distance, midpoint, slope, line equations.',
      },
      { slug: 'circle', title: 'Circle', description: 'Standard and general equations of a circle.' },
      { slug: 'parabola', title: 'Parabola', description: 'Standard forms, focus, directrix.' },
      { slug: 'ellipse', title: 'Ellipse', description: 'Standard equations, foci, eccentricity.' },
      { slug: 'hyperbola', title: 'Hyperbola', description: 'Standard equations, asymptotes, foci.' },
    ],
  },
  {
    slug: 'trigonometry',
    title: 'Trigonometry',
    description:
      'Trig functions, identities, graphs, higher angles, inverse and hyperbolic functions.',
    icon: Triangle,
    accent: 'from-orange-500 to-rose-500',
    topics: [
      { slug: 'basics', title: 'Trigonometry Basics', description: 'Sin, cos, tan and core identities.' },
      { slug: 'graphs', title: 'Trigonometry Graphs', description: 'Graphs of trig functions.' },
      { slug: 'higher-angles', title: 'Higher Angles', description: 'Double, triple, half angle formulas.' },
      {
        slug: 'laws-of-trigonometry',
        title: 'Laws of Trigonometry',
        description: 'Law of sines, law of cosines.',
      },
      {
        slug: 'inverse-trigonometry',
        title: 'Inverse Trigonometry',
        description: 'Arc functions and identities.',
      },
      { slug: 'hyperbolic', title: 'Hyperbolic Functions', description: 'sinh, cosh, tanh and identities.' },
    ],
  },
  {
    slug: 'calculus',
    title: 'Calculus',
    description:
      'Limits, derivatives, integrals, Laplace transforms, and differential equations.',
    icon: Sigma,
    accent: 'from-fuchsia-500 to-pink-500',
    topics: [
      { slug: 'limits', title: 'Limits', description: 'Definition, properties, common limits.' },
      { slug: 'derivatives', title: 'Derivatives', description: 'Power, product, quotient, chain rule.' },
      { slug: 'integration', title: 'Integration', description: 'Antiderivatives, common integrals.' },
      {
        slug: 'laplace-transform',
        title: 'Laplace Transform',
        description: 'Transform pairs and properties.',
      },
      {
        slug: 'differential-equations',
        title: 'Differential Equations',
        description: 'First and second order ODEs.',
      },
    ],
  },
];

export const flatTopics = categories.flatMap((c) =>
  c.topics.map((t) => ({
    categorySlug: c.slug,
    categoryTitle: c.title,
    ...t,
  })),
);

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
