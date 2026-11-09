// MyCrochify — Vanilla JavaScript Application Engine
// Brand Identity: Elegant Rose & Sage System

// Image Constants
const HERO_IMAGE = '/src/assets/images/hero_crochet_collection_1794056506186.jpg';
const BABY_IMAGE = '/src/assets/images/category_baby_crochet_1794057068539.jpg';
const AMIGURUMI_IMAGE = '/src/assets/images/category_amigurumi_1794057069704.jpg';
const CHRISTMAS_IMAGE = '/src/assets/images/category_christmas_1794057070208.jpg';
const TUTORIAL_IMAGE = '/src/assets/images/tutorial_stitches_1794057070791.jpg';
const TOTE_IMAGE = '/src/assets/images/product_crochet_rose_tote_1794056507219.jpg';
const CARDIGAN_IMAGE = '/src/assets/images/product_crochet_cardigan_1794056507479.jpg';
const BOUQUET_IMAGE = '/src/assets/images/product_crochet_rose_bouquet_1794056508988.jpg';
const STUDIO_IMAGE = '/src/assets/images/craft_artisan_studio_1794056509181.jpg';

// Database: Patterns
const PATTERNS = [
  {
    id: 'heirloom-rose-waffle-blanket',
    title: 'Heirloom Rose Waffle Baby Blanket',
    tagline: 'A cloud-soft thermal waffle blanket with delicate scalloped picot edging.',
    category: 'baby',
    subcategory: 'Baby Blankets',
    difficulty: 'Easy',
    isFree: true,
    image: BABY_IMAGE,
    secondaryImage: HERO_IMAGE,
    description: 'Wrap your little one in cozy warmth with this timeless heirloom baby blanket. Crocheted in a squishy waffle stitch that traps gentle warmth without heavy weight, and finished with a delicate scalloped dusty rose picot border.',
    estimatedTime: '12–16 Hours',
    hookSize: '4.5 mm (US 7)',
    yarnWeight: 'DK / Light Worsted (Weight 3)',
    yarnRecommendation: 'Organic Baby Merino Wool or Bamboo Blend (approx. 450g / 1200m)',
    finishedSize: '30 inches × 36 inches (76 cm × 91 cm)',
    gauge: '18 sts × 14 rows = 4" in waffle stitch pattern',
    materials: [
      '450g DK weight organic baby merino yarn in Warm Rose Ivory and Dusty Rose',
      '4.5 mm crochet hook (or size needed to obtain gauge)',
      'Tapestry needle for weaving in ends',
      'Tape measure',
      'Scissors'
    ],
    abbreviations: [
      { term: 'ch', meaning: 'Chain' },
      { term: 'sl st', meaning: 'Slip stitch' },
      { term: 'dc', meaning: 'Double crochet (US)' },
      { term: 'fpdc', meaning: 'Front post double crochet' },
      { term: 'bpdc', meaning: 'Back post double crochet' },
      { term: 'picot', meaning: 'Ch 3, sl st into first chain' }
    ],
    steps: [
      {
        round: 'Foundation Row',
        instructions: 'Ch 131 (or any multiple of 3 + 2 for custom width). Dc in 3rd ch from hook and in each ch across. Turn.',
        stitchCount: '129 sts',
        tip: 'Use a loose tension for the foundation chain so the bottom edge does not pull tight.'
      },
      {
        round: 'Row 1 (Right Side)',
        instructions: 'Ch 2 (counts as first dc). *Fpdc around next st, dc in next 2 sts; rep from * to last 2 sts, fpdc around next st, dc in top of turning ch. Turn.',
        stitchCount: '129 sts'
      },
      {
        round: 'Row 2 (Wrong Side)',
        instructions: 'Ch 2 (counts as first dc). *Dc in next st, fpdc around next 2 sts; rep from * to last 2 sts, dc in next st, dc in top of turning ch. Turn.',
        stitchCount: '129 sts',
        tip: 'Notice how the raised waffle boxes form with every second row.'
      },
      {
        round: 'Rows 3 to 105',
        instructions: 'Repeat Rows 1 and 2 until blanket measures approximately 34 inches from foundation edge, ending on a Row 1 repeat.',
        stitchCount: '129 sts'
      },
      {
        round: 'Border Round 1',
        instructions: 'Ch 1, sc evenly around all four sides of the blanket, placing (sc, ch 2, sc) in each corner. Join with sl st to first sc.'
      },
      {
        round: 'Border Round 2 (Rose Scallop)',
        instructions: '*Skip 1 st, 5 dc in next st, skip 1 st, sl st in next st; rep from * around, working (3 dc, ch 3 picot, 3 dc) into corner spaces. Fasten off and weave in ends.',
        tip: 'Lightly steam block the blanket on flat towels to open up the waffle texture.'
      }
    ],
    videoTutorialAvailable: true,
    videoDuration: '24 mins',
    rating: 4.96,
    reviewsCount: 78,
    featured: true,
    trending: true
  },
  {
    id: 'petite-rosebud-baby-booties',
    title: 'Petite Rosebud Baby Booties',
    tagline: 'Gentle, stay-on booties adorned with tiny pearl buttons and ribbed turn-up cuffs.',
    category: 'baby',
    subcategory: 'Baby Booties',
    difficulty: 'Beginner',
    isFree: true,
    image: BABY_IMAGE,
    description: 'Designed specifically to stay on tiny kicking feet! These booties feature an ergonomic sole, a cozy ribbed turn-over cuff, and sweet faux pearl button details.',
    estimatedTime: '2–3 Hours',
    hookSize: '3.5 mm (US E/4)',
    yarnWeight: 'Sport / Baby Weight (Weight 2)',
    yarnRecommendation: '100% Cotton or Merino Baby Wool (50g)',
    finishedSize: 'Sole length: 3.5 inches (0-3 months) / 4 inches (3-6 months)',
    gauge: '22 sc × 24 rows = 4"',
    materials: [
      '50g soft blush pink baby yarn',
      '3.5 mm crochet hook',
      '2 small pearl or wooden buttons (10 mm)',
      'Tapestry needle'
    ],
    abbreviations: [
      { term: 'ch', meaning: 'Chain' },
      { term: 'sc', meaning: 'Single crochet' },
      { term: 'hdc', meaning: 'Half double crochet' },
      { term: 'dc', meaning: 'Double crochet' },
      { term: 'sc2tog', meaning: 'Single crochet 2 together (decrease)' }
    ],
    steps: [
      {
        round: 'Sole - Round 1',
        instructions: 'Ch 11. 2 sc in 2nd ch from hook, sc in next 8 ch, 5 sc in last ch. Working along opposite side of foundation chain: sc in next 8 ch, 2 sc in last st. Sl st to join.',
        stitchCount: '25 sts'
      },
      {
        round: 'Sole - Round 2',
        instructions: 'Ch 2, 2 hdc in next 2 sts, hdc in next 8 sts, 2 hdc in next 5 sts, hdc in next 8 sts, 2 hdc in last 2 sts. Sl st to join.',
        stitchCount: '34 sts'
      },
      {
        round: 'Upper Bootie - Round 3 & 4',
        instructions: 'Ch 1, sc in back loops only around. Round 4: Ch 1, sc in both loops around. Sl st to join.',
        stitchCount: '34 sts'
      },
      {
        round: 'Toe Decreases - Round 5',
        instructions: 'Ch 1, sc in next 10 sts, (sc2tog) 7 times across toe, sc in last 10 sts. Join.',
        stitchCount: '27 sts'
      },
      {
        round: 'Ankle Ribbing - Rounds 6 to 12',
        instructions: 'Ch 2, *fpdc, bpdc; rep from * around for 6 rounds to create folded ribbing. Fasten off and sew button securely to side cuff.'
      }
    ],
    rating: 4.92,
    reviewsCount: 45,
    trending: true
  },
  {
    id: 'sweet-fawn-baby-rattle',
    title: 'Sweet Flora Bunny & Fawn Baby Rattle',
    tagline: 'Natural beechwood teething ring wrapped in organic cotton crochet stitches.',
    category: 'baby',
    subcategory: 'Baby Toys',
    difficulty: 'Easy',
    isFree: false,
    price: 4.50,
    image: BABY_IMAGE,
    description: 'A comforting sensory heirloom toy for newborns and teething infants. Built around an untreated organic beechwood ring with safety-tested embroidered sleepy eyes and a soft enclosed chime bell.',
    estimatedTime: '4 Hours',
    hookSize: '2.5 mm (US C/2)',
    yarnWeight: 'Fingering / 4-ply Combed Cotton',
    yarnRecommendation: 'GOTS Certified Organic Combed Cotton',
    finishedSize: 'Approx. 5.5 inches tall including wood ring',
    gauge: '26 sc × 28 rows = 4"',
    materials: [
      '30g dusty rose cotton, 15g ivory cotton',
      '70mm untreated organic beechwood ring',
      'Small bell / rattle insert',
      'Hypoallergenic corn fiber or polyester stuffing',
      'Embroidery floss in deep plum for eyes and nose'
    ],
    abbreviations: [
      { term: 'mr', meaning: 'Magic ring' },
      { term: 'sc', meaning: 'Single crochet' },
      { term: 'inc', meaning: 'Increase' },
      { term: 'dec', meaning: 'Invisible decrease' }
    ],
    steps: [
      {
        round: 'Head - Rnds 1 to 6',
        instructions: 'Rnd 1: 6 sc in MR. Rnd 2: Inc in each st (12). Rnd 3: (1 sc, inc) 6x (18). Rnd 4: (2 sc, inc) 6x (24). Rnds 5-8: Sc in each st around (24).'
      },
      {
        round: 'Face Embroidery & Stuffing',
        instructions: 'Insert rattle cylinder inside center of stuffing. Embroider sleepy eyelids between rounds 6 and 7 using deep plum floss.'
      },
      {
        round: 'Ears & Ring Sleeve',
        instructions: 'Crochet 2 bunny ears and a 20-row rectangle to wrap around the wood ring. Whipstitch firmly around the beechwood.'
      }
    ],
    rating: 4.98,
    reviewsCount: 52
  },
  {
    id: 'cozy-dusty-rose-teddy-bear',
    title: 'Barnaby the Dusty Rose Teddy Bear',
    tagline: 'An adorable, huggable vintage-inspired teddy bear with moveable limbs.',
    category: 'amigurumi',
    subcategory: 'Teddy Bears',
    difficulty: 'Easy',
    isFree: true,
    image: AMIGURUMI_IMAGE,
    description: 'Meet Barnaby, a gentle companion designed with seamless single crochet stitches and a charming crocheted bow tie. Perfect for gifts, nursery bookshelves, or cozy bedroom decor.',
    estimatedTime: '8–10 Hours',
    hookSize: '3.0 mm (US D/3)',
    yarnWeight: 'DK / Light Worsted',
    yarnRecommendation: 'Soft Acrylic or Cotton-Wool Blend in Dusty Rose and Cream',
    finishedSize: 'Approx. 10.5 inches (27 cm) seated',
    gauge: '22 sc × 24 rows = 4"',
    materials: [
      '100g Dusty Rose yarn, 30g Cream yarn',
      '3.0 mm crochet hook',
      '10 mm black safety eyes (or embroidered plum thread)',
      'Fiberfill stuffing',
      'Stitch markers & yarn needle'
    ],
    abbreviations: [
      { term: 'MR', meaning: 'Magic ring' },
      { term: 'sc', meaning: 'Single crochet' },
      { term: 'inc', meaning: 'Increase' },
      { term: 'dec', meaning: 'Invisible decrease' }
    ],
    steps: [
      {
        round: 'Head - Rounds 1 to 5',
        instructions: 'R1: 6 sc in MR. R2: 6 inc (12). R3: (1 sc, inc) × 6 (18). R4: (2 sc, inc) × 6 (24). R5: (3 sc, inc) × 6 (30).',
        tip: 'Use an invisible decrease to prevent holes in amigurumi fabric.'
      },
      {
        round: 'Head - Rounds 6 to 16',
        instructions: 'R6: (4 sc, inc) × 6 (36). R7-13: Sc around (36). Insert safety eyes between R10 and R11, 7 stitches apart. R14: (4 sc, dec) × 6 (30). R15: (3 sc, dec) × 6 (24). Stuff firmly. R16: (2 sc, dec) × 6 (18).'
      },
      {
        round: 'Body - Rounds 1 to 14',
        instructions: 'Begin in Dusty Rose. Work in continuous spiral from base upward, increasing to 42 sts, working 6 even rounds, then decreasing evenly to 18 sts to match neck.'
      },
      {
        round: 'Assembly & Bow Tie',
        instructions: 'Whipstitch head to body with extra yarn tail. Attach arms, legs, and ears. Ch 18 for bow tie and wrap center with deep plum yarn.'
      }
    ],
    videoTutorialAvailable: true,
    videoDuration: '35 mins',
    rating: 4.95,
    reviewsCount: 114,
    featured: true,
    trending: true
  },
  {
    id: 'flora-the-woodland-fawn',
    title: 'Flora the Woodland Spotted Fawn',
    tagline: 'An enchanting amigurumi fawn with embroidered spots and petite golden antlers.',
    category: 'amigurumi',
    subcategory: 'Crochet Animals',
    difficulty: 'Intermediate',
    isFree: false,
    price: 6.00,
    image: AMIGURUMI_IMAGE,
    description: 'Bring woodland magic into your home with Flora the Fawn. Features sculpted muzzle shaping, French knot cream spots on her back, and delicate crocheted antlers in soft champagne fawn hues.',
    estimatedTime: '9 Hours',
    hookSize: '2.75 mm (US C/2)',
    yarnWeight: 'Fingering / Sport Weight',
    yarnRecommendation: 'Merino Wool or Cotton Blend (Warm Fawn & Dusty Rose)',
    finishedSize: '9 inches (23 cm) tall',
    gauge: '24 sc × 26 rows = 4"',
    materials: [
      '80g Dusty Rose/Fawn yarn, 25g Ivory yarn, 10g Gold/Champagne yarn',
      '2.75 mm hook',
      'Safety eyes or embroidery floss',
      'Tapestry needle and toy stuffing'
    ],
    abbreviations: [
      { term: 'MR', meaning: 'Magic Ring' },
      { term: 'sc', meaning: 'Single Crochet' },
      { term: 'inc', meaning: 'Increase' },
      { term: 'dec', meaning: 'Decrease' }
    ],
    steps: [
      {
        round: 'Head & Muzzle Shaping',
        instructions: 'Start in Ivory for muzzle, transition smoothly to Fawn on Round 7 with back loop color change. Sculpt eye indentations before final stuffing.'
      },
      {
        round: 'Slender Legs & Body',
        instructions: 'Legs are joined directly into the lower torso for a sturdy, poseable seated silhouette.'
      },
      {
        round: 'Spots & Antlers',
        instructions: 'Embroider delicate French knots along the flanks using ivory wool. Attach curved antlers to crown between rounds 4 and 5.'
      }
    ],
    rating: 4.99,
    reviewsCount: 86,
    trending: true
  },
  {
    id: 'vintage-lace-snowflake-ornaments',
    title: 'Victorian Lace Rose Snowflake Baubles',
    tagline: 'Delicate openwork lace snowflakes that catch the glow of twinkling holiday lights.',
    category: 'christmas',
    subcategory: 'Christmas Ornaments',
    difficulty: 'Easy',
    isFree: true,
    image: CHRISTMAS_IMAGE,
    description: 'Grace your Christmas tree with timeless Victorian elegance. These snowflake ornaments work up quickly in pure ivory or blush cotton thread and can be stiffened with natural sugar water or fabric stiffener.',
    estimatedTime: '45 mins per ornament',
    hookSize: '2.0 mm (Steel hook #4)',
    yarnWeight: 'Crochet Cotton Thread Size 10 or Fingering Cotton',
    yarnRecommendation: '100% Mercerized Egyptian Combed Cotton Thread',
    finishedSize: '4.5 inches (11.5 cm) point-to-point',
    gauge: 'Not critical for this project',
    materials: [
      '1 ball (50g) Size 10 crochet cotton thread in Warm Rose Ivory',
      '2.0 mm crochet hook',
      'Natural fabric stiffener or water + sugar solution',
      'Blocking pins and blocking mat',
      'Jute twine or blush velvet hanging ribbon'
    ],
    abbreviations: [
      { term: 'ch', meaning: 'Chain' },
      { term: 'sl st', meaning: 'Slip stitch' },
      { term: 'sc', meaning: 'Single crochet' },
      { term: 'dc', meaning: 'Double crochet' },
      { term: 'tr', meaning: 'Treble crochet' },
      { term: 'picot', meaning: 'Ch 3, sl st in first ch' }
    ],
    steps: [
      {
        round: 'Round 1 (Center Ring)',
        instructions: 'Ch 6, join with sl st to form a ring. Ch 1, 12 sc into ring. Join with sl st to first sc.',
        stitchCount: '12 sc'
      },
      {
        round: 'Round 2',
        instructions: 'Ch 3 (counts as dc), dc in same st, ch 3, *2 dc in next st, ch 3; rep from * around (6 chain-3 spaces). Join with sl st.',
        stitchCount: '12 dc, 6 ch-3 sps'
      },
      {
        round: 'Round 3 (Petal Arches)',
        instructions: 'Sl st into ch-3 sp. Ch 1, (sc, hdc, dc, tr, dc, hdc, sc) in each ch-3 sp around. Join with sl st to first sc.'
      },
      {
        round: 'Round 4 (Snowflake Points)',
        instructions: 'Sl st to top of center treble crochet. *Ch 5, picot, ch 5, sl st into next treble; rep from * around. Fasten off.',
        tip: 'Pin each point onto foam and spray with stiffener; allow to dry overnight for glass-like rigidity.'
      }
    ],
    videoTutorialAvailable: true,
    videoDuration: '14 mins',
    rating: 4.97,
    reviewsCount: 132,
    seasonalTag: 'Christmas',
    featured: true,
    trending: true
  },
  {
    id: 'scandi-pine-crochet-tree',
    title: 'Scandi Layered Holiday Pine Tree',
    tagline: 'Textured crocodile-stitch miniature evergreen tree finished with a wooden star.',
    category: 'christmas',
    subcategory: 'Christmas Trees',
    difficulty: 'Easy',
    isFree: true,
    image: CHRISTMAS_IMAGE,
    description: 'Add cozy Scandinavian charm to your festive mantelpiece or holiday dining table. Worked from the peak down in layered textured boughs over a sturdy cone base.',
    estimatedTime: '3–4 Hours',
    hookSize: '3.5 mm (US E/4)',
    yarnWeight: 'DK / Light Worsted',
    yarnRecommendation: 'Forest Pine Wool or Rosewood Holiday Tweed',
    finishedSize: '7.5 inches (19 cm) height',
    gauge: '18 sc = 4"',
    materials: [
      '60g deep pine green or dusty rose yarn',
      'Small wooden star topper and miniature wooden beads',
      'Jute twine for tree trunk wrapping',
      'Styrofoam cone (optional base support)'
    ],
    abbreviations: [
      { term: 'ch', meaning: 'Chain' },
      { term: 'sc', meaning: 'Single crochet' },
      { term: 'dc', meaning: 'Double crochet' }
    ],
    steps: [
      {
        round: 'Rounds 1–4 (Tree Top Cone)',
        instructions: 'Work continuous sc increases from MR to establish cone apex.'
      },
      {
        round: 'Rounds 5–18 (Layered Boughs)',
        instructions: 'Alternate V-stitch foundation rounds with textured shell bough rounds that flare outward gently.'
      },
      {
        round: 'Trunk & Embellishments',
        instructions: 'Crochet wood-grain trunk cylinder, glue or sew tiny craft beads as baubles, and crown with the wooden star.'
      }
    ],
    rating: 4.89,
    reviewsCount: 67,
    seasonalTag: 'Christmas'
  },
  {
    id: 'the-wild-rose-cable-cardigan',
    title: 'The Wild Rose Cable-Stitch Cardigan',
    tagline: 'An exquisite vintage knitwear pattern featuring Celtic braided cables and pearl closures.',
    category: 'clothing',
    subcategory: 'Cardigans',
    difficulty: 'Intermediate',
    isFree: false,
    price: 7.50,
    image: CARDIGAN_IMAGE,
    secondaryImage: HERO_IMAGE,
    description: 'Our most celebrated garment design. Combines dense waffle ribs with rich 3D Celtic cable stitches along the front plackets, finished with tailored cuffs and genuine mother-of-pearl buttons. Includes sizes XS through 3XL.',
    estimatedTime: '24–30 Hours',
    hookSize: '5.0 mm (US H/8)',
    yarnWeight: 'Worsted / Aran (Weight 4)',
    yarnRecommendation: '100% Superfine Merino Wool or Merino-Silk Blend (650g–900g)',
    finishedSize: 'Sizes XS, S, M, L, XL, 2XL, 3XL (Bust 34" to 54")',
    gauge: '14 sts × 11 rows = 4" in half double crochet cable pattern',
    materials: [
      '750g worsted weight yarn in Vintage Rosewood',
      '5.0 mm crochet hook and 4.0 mm hook for ribbing',
      '6 natural pearl buttons (18 mm)',
      'Cable stitch markers & locking stitch markers'
    ],
    abbreviations: [
      { term: 'ch', meaning: 'Chain' },
      { term: 'hdc', meaning: 'Half double crochet' },
      { term: 'fptr', meaning: 'Front post treble crochet' }
    ],
    steps: [
      {
        round: 'Back Panel',
        instructions: 'Work ribbed hem sideways, turn and work body in alternating hdc and waffle texture for 22 inches.'
      },
      {
        round: 'Front Panels (Make 2)',
        instructions: 'Incorporate 12-stitch Celtic cable panel along the button placket edge with gradual V-neck shaping.'
      },
      {
        round: 'Sleeves & Assembly',
        instructions: 'Crochet tailored dropped-shoulder sleeves, seam with mattress stitch, and finish with ribbed button band.'
      }
    ],
    videoTutorialAvailable: true,
    videoDuration: '48 mins',
    rating: 4.98,
    reviewsCount: 94,
    featured: true,
    trending: true
  },
  {
    id: 'la-petite-rose-granny-tote',
    title: 'La Petite Rose Granny-Square Tote',
    tagline: 'A structural, fully lined crochet handbag adorned with sculpted 3D rose relief.',
    category: 'clothing',
    subcategory: 'Bags & Totes',
    difficulty: 'Easy',
    isFree: true,
    image: TOTE_IMAGE,
    description: 'The iconic MyCrochify tote bag. Thirteen granny squares centered with dimensional raised rosebuds are seamlessly joined and framed with sturdy double-crochet borders and reinforced double-layer handles.',
    estimatedTime: '10–12 Hours',
    hookSize: '4.0 mm (US G/6)',
    yarnWeight: 'Worsted Weight (Weight 4)',
    yarnRecommendation: 'Durable Mercerized Combed Cotton or Cotton-Linen Blend (300g)',
    finishedSize: '13.5 inches wide × 11.5 inches high (excluding handles)',
    gauge: 'Each granny square measures 4.5 inches across',
    materials: [
      '200g Dusty Rose cotton, 100g Warm Rose Ivory cotton',
      '4.0 mm crochet hook',
      '1/2 yard unbleached linen fabric for lining',
      'Tapestry needle'
    ],
    abbreviations: [
      { term: 'ch', meaning: 'Chain' },
      { term: 'sc', meaning: 'Single crochet' },
      { term: 'dc', meaning: 'Double crochet' }
    ],
    steps: [
      {
        round: 'Rose Center Motif',
        instructions: 'Work 8 popcorn petals into magic ring in dusty rose. Change to ivory in Round 2.'
      },
      {
        round: 'Squaring the Circle',
        instructions: 'Work (3 dc, ch 2, 3 dc) in corners and 3 dc clusters along sides to create uniform 4.5" squares.'
      },
      {
        round: 'Joining & Handles',
        instructions: 'Join 13 motifs using flat slip stitch seam. Work 4 rounds of sc along the top rim and create reinforced double-crochet strap bands.'
      }
    ],
    videoTutorialAvailable: true,
    videoDuration: '28 mins',
    rating: 4.93,
    reviewsCount: 82,
    featured: true
  },
  {
    id: 'eternal-prairie-rose-bouquet',
    title: 'Eternal Prairie Rose Botanical Bouquet',
    tagline: 'Lifelike botanical roses and buds with realistic calyxes and flexible wire stems.',
    category: 'home',
    subcategory: 'Everlasting Botanicals',
    difficulty: 'Easy',
    isFree: true,
    image: BOUQUET_IMAGE,
    description: 'Create a permanent bouquet of English garden roses that will never wither. Includes instructions for open garden roses, tight rosebuds, leafy sprigs, and wrapping techniques.',
    estimatedTime: '1.5 Hours per stem',
    hookSize: '2.5 mm (US C/2)',
    yarnWeight: 'Sport / Fingering Cotton',
    yarnRecommendation: 'Combed Mercerized Cotton in Petal Blush, Dusty Rose, and Sage Green',
    finishedSize: 'Flower heads: 3" to 3.5" diameter; Stem: 12" long',
    gauge: 'Not critical for flowers',
    materials: [
      'Fine cotton yarn in dusty rose, blush, ivory, and sage',
      '18-gauge floral wire stems',
      'Green floral tape',
      'Craft glue or glue gun',
      'Wire cutters'
    ],
    abbreviations: [
      { term: 'ch', meaning: 'Chain' },
      { term: 'sc', meaning: 'Single crochet' },
      { term: 'dc', meaning: 'Double crochet' }
    ],
    steps: [
      {
        round: 'Petal Strip',
        instructions: 'Ch 61. Work progressive scallops from small inner petals to wide outer petals in one continuous strip.'
      },
      {
        round: 'Rolling & Shaping',
        instructions: 'Coil the petal strip around the wire stem tip, securing with hot glue or yarn stitches to create natural spiral blooming.'
      },
      {
        round: 'Green Calyx & Leaves',
        instructions: 'Crochet 5-pointed star calyx in sage green, slip onto base of rose head, and wrap wire with floral tape.'
      }
    ],
    rating: 4.97,
    reviewsCount: 91
  }
];

// Database: Tutorials
const TUTORIAL_ARTICLES = [
  {
    id: 'crochet-basics-for-beginners',
    title: 'Crochet Basics 101: The Slip Knot, Chain & Single Crochet',
    category: 'beginner',
    subcategory: 'Beginner Tutorials',
    difficulty: 'Beginner',
    readTime: '6 min read',
    image: TUTORIAL_IMAGE,
    summary: 'A step-by-step photographic guide for absolute beginners. Learn how to comfortably hold the hook, control yarn tension, and build clean, even stitches without hand cramps.',
    sections: [
      {
        heading: '1. Holding Your Hook & Finding Your Grip',
        content: 'There are two natural ways to hold a crochet hook: the Pencil Grip (holding the hook between thumb and index finger like a writing pen) and the Knife Grip (resting the hook handle under your palm like a dinner knife). Neither is wrong! Experiment with both for 10 minutes to see which feels natural for your wrists.',
        keyPoints: [
          'Keep your shoulders relaxed and elbows resting gently at your sides.',
          'Position your work so you do not have to hunch forward over your lap.'
        ]
      },
      {
        heading: '2. The Foundation Slip Knot & Chain Stitch (ch)',
        content: 'Every flat crochet project begins with a foundation chain. Make a loop with your yarn, pull a loop through from behind, and slide it onto your hook. Yarn over (bring yarn from back over the top of the hook) and gently draw the hook through the active loop. That is one chain stitch!',
        callout: 'Pro Tip: Count your chains as you make them, and avoid pulling tight. A relaxed foundation chain keeps your bottom edge straight.'
      },
      {
        heading: '3. The Single Crochet (sc): Your Fundamental Building Block',
        content: 'Insert your hook into the next chain, yarn over and pull up a loop (you now have 2 loops on your hook). Yarn over once more and draw through both loops. You have just completed a single crochet! Practice 20 stitches across a 15-row swatch until your edges are straight and even.'
      }
    ]
  },
  {
    id: 'how-to-read-crochet-patterns',
    title: 'How to Read Crochet Patterns & Charts Without Confusion',
    category: 'beginner',
    subcategory: 'Crochet Basics',
    difficulty: 'Beginner',
    readTime: '8 min read',
    image: STUDIO_IMAGE,
    summary: 'Demystifying asterisks, parentheses, round brackets, and the crucial differences between US and UK terminology so you can follow any designer with complete confidence.',
    sections: [
      {
        heading: '1. US vs. UK Terminology (The Golden Rule)',
        content: 'Always check which terminology a pattern uses before picking up your hook! In US terms, a single crochet (sc) is the basic short stitch. In UK terms, that identical stitch is called a double crochet (dc). A US double crochet equals a UK treble crochet. All MyCrochify patterns default to US terms with UK translations provided in the notes.',
        keyPoints: [
          'US Single Crochet (sc) = UK Double Crochet (dc)',
          'US Half Double Crochet (hdc) = UK Half Treble (htr)',
          'US Double Crochet (dc) = UK Treble (tr)',
          'US Treble Crochet (tr) = UK Double Treble (dtr)'
        ]
      },
      {
        heading: '2. Understanding Brackets, Asterisks & Repeats',
        content: 'When you see an asterisk (*) in instructions, it marks the start of a repeating sequence. For example: "*2 dc in next st, 1 dc in next 2 sts; rep from * to end" means you continue that exact rhythm across the entire row.'
      }
    ]
  },
  {
    id: 'essential-crochet-tools-guide',
    title: 'The Essential Crochet Tool Kit: Hooks, Yarns & Notions',
    category: 'beginner',
    subcategory: 'Tips & Tricks',
    difficulty: 'Beginner',
    readTime: '5 min read',
    image: STUDIO_IMAGE,
    summary: 'Discover the ergonomic hooks, yarn weights, blocking mats, and stitch markers that elevate your making experience from frustrating to pure joy.',
    sections: [
      {
        heading: '1. Ergonomic Hooks: Wood vs. Aluminum',
        content: 'Polished rosewood and birch hooks provide a gentle, warm grip with natural slight friction that prevents slippery silk yarns from sliding off unexpectedly. Ergonomic rubberized aluminum hooks glide effortlessly through wool and cotton.'
      },
      {
        heading: '2. Locking Stitch Markers & Measuring Tapes',
        content: 'Never work amigurumi in spirals without a locking marker! Unlike knitting rings, crochet markers must open and clip into the active loop so you can pause your work safely.'
      }
    ]
  },
  {
    id: 'mastering-the-rose-petal-stitch',
    title: 'Mastering the Textured 3D Rose Petal Stitch',
    category: 'stitches',
    subcategory: 'Crochet Stitches',
    difficulty: 'Intermediate',
    readTime: '7 min read',
    image: TUTORIAL_IMAGE,
    summary: 'Create breathtaking floral relief for blankets, cushions, and bags using front-post clusters and sculpted popcorn stitches.',
    sections: [
      {
        heading: '1. The Anatomy of a Raised Petal',
        content: 'The 3D rose stitch is achieved by working multiple treble crochet stitches around the post of a previous row stitch rather than into the top loops. This lifts the yarn off the fabric surface, creating dimensional shadowing.',
        keyPoints: [
          'Maintain consistent yarn tension when pulling up long treble loops.',
          'Count active petal posts before securing with a slip stitch anchor.'
        ]
      }
    ]
  }
];

// Database: Categories Meta
const CATEGORY_INFO = {
  baby: {
    title: 'Baby Crochet Patterns',
    tagline: 'Sweet handmade creations for life’s little moments.',
    description: 'Explore our heirloom collection of baby crochet patterns. From cloud-soft waffle blankets and stay-on booties to soothing rattles and nursery decor, each design is written with tender care and clear step-by-step guidance.',
    bannerImage: BABY_IMAGE,
    subcategories: ['All Baby Projects', 'Baby Blankets', 'Baby Clothes', 'Baby Booties', 'Baby Hats & Bonnets', 'Baby Toys', 'Nursery Decor']
  },
  amigurumi: {
    title: 'Amigurumi Crochet Patterns',
    tagline: 'Meet your next adorable handmade companion.',
    description: 'Charming amigurumi animals, classic teddy bears, sweet dolls, and whimsical characters. Featuring clean seamless construction, detailed shaping tips, and easy-to-follow photo tutorials.',
    bannerImage: AMIGURUMI_IMAGE,
    subcategories: ['All Amigurumi', 'Crochet Animals', 'Teddy Bears', 'Crochet Dolls', 'Cute Characters', 'Food Amigurumi', 'Seasonal Amigurumi']
  },
  christmas: {
    title: 'Christmas & Holiday Crochet',
    tagline: 'Make the holidays extra special with handmade magic.',
    description: 'Embrace the festive season with our romantic holiday patterns. Victorian lace snowflakes, miniature pine trees, Nordic reindeer, and heirloom stockings to deck your home in warm holiday wonder.',
    bannerImage: CHRISTMAS_IMAGE,
    subcategories: ['All Christmas', 'Christmas Ornaments', 'Christmas Trees', 'Reindeer', 'Santa Claus', 'Christmas Elves', 'Christmas Stockings', 'Festive Home Decor']
  },
  tutorials: {
    title: 'Crochet Tutorials & Stitch Library',
    tagline: 'Learn, practice, and grow your crochet skills.',
    description: 'Comprehensive guides written for both enthusiastic beginners and seasoned makers. Master foundational techniques, explore intricate 3D floral stitches, and pick up professional finishing secrets.',
    bannerImage: TUTORIAL_IMAGE,
    subcategories: ['All Tutorials', 'Beginner Tutorials', 'Crochet Stitches', 'Step-by-Step Projects', 'Advanced Techniques', 'Tips & Tricks']
  },
  free: {
    title: 'Free Crochet Patterns Library',
    tagline: 'Beautiful creations, completely free to make.',
    description: 'A curated treasury of 100% free crochet patterns with complete row-by-round written instructions, video guides, materials lists, and print-friendly formats.',
    bannerImage: HERO_IMAGE,
    subcategories: ['All Free Patterns', 'Baby Patterns', 'Amigurumi', 'Holiday & Seasonal', 'Home & Flowers', 'Wearables']
  }
};

// Application State
const state = {
  view: { type: 'home' },
  favorites: JSON.parse(localStorage.getItem('mycrochify_favorites') || '["heirloom-rose-waffle-blanket", "cozy-dusty-rose-teddy-bear"]'),
  cart: [],
  categoryFilter: {
    sub: 'All',
    difficulty: 'All',
    pricing: 'all',
    search: '',
    sortBy: 'featured'
  },
  trendingFilter: 'all',
  activeRow: 1,
  checkedMaterials: {},
  searchModalOpen: false,
  favoritesDrawerOpen: false,
  cartDrawerOpen: false
};

// State Persistence
function saveFavorites() {
  localStorage.setItem('mycrochify_favorites', JSON.stringify(state.favorites));
  updateBadges();
}

// Toast System
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none flex flex-col gap-2 items-center';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'bg-[#49343B] text-[#FFF9F7] px-5 py-2.5 rounded-full shadow-lg text-xs font-medium flex items-center gap-2 animate-bounce-in';
  toast.innerHTML = `
    <span class="w-2 h-2 rounded-full bg-[#DCE5D8]"></span>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2800);
}

// Navigation Helper
window.navigateTo = function(type, id) {
  state.view = { type, id };
  if (type === 'pattern') {
    state.activeRow = 1;
    state.checkedMaterials = {};
  }
  if (type === 'category') {
    state.categoryFilter.sub = 'All';
    state.categoryFilter.difficulty = 'All';
    state.categoryFilter.pricing = 'all';
    state.categoryFilter.search = '';
  }
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Favorites Toggle
window.toggleFavorite = function(patternId) {
  const index = state.favorites.indexOf(patternId);
  if (index > -1) {
    state.favorites.splice(index, 1);
    showToast('Removed from saved patterns');
  } else {
    state.favorites.push(patternId);
    showToast('Saved to your favorites');
  }
  saveFavorites();
  renderFavoritesDrawer();
  render();
};

// Cart Actions
window.addToCart = function(patternId) {
  const pattern = PATTERNS.find(p => p.id === patternId);
  if (!pattern) return;
  if (!state.cart.some(item => item.id === pattern.id)) {
    state.cart.push(pattern);
    showToast(`Added "${pattern.title}" to pattern bag`);
  } else {
    showToast(`"${pattern.title}" is already in your bag`);
  }
  updateBadges();
  renderCartDrawer();
  window.openCart();
};

window.removeFromCart = function(patternId) {
  state.cart = state.cart.filter(item => item.id !== patternId);
  updateBadges();
  renderCartDrawer();
  showToast('Removed pattern from bag');
};

// Printable PDF Generation
window.downloadPatternPDF = function(patternId) {
  const pattern = PATTERNS.find(p => p.id === patternId);
  if (!pattern) return;

  let printIframe = document.getElementById('mycrochify-print-frame');
  if (!printIframe) {
    printIframe = document.createElement('iframe');
    printIframe.id = 'mycrochify-print-frame';
    printIframe.style.position = 'fixed';
    printIframe.style.right = '0';
    printIframe.style.bottom = '0';
    printIframe.style.width = '0';
    printIframe.style.height = '0';
    printIframe.style.border = '0';
    printIframe.style.zIndex = '-999';
    document.body.appendChild(printIframe);
  }

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${pattern.title} — MyCrochify Pattern</title>
      <style>
        body { font-family: 'Georgia', serif; color: #49343B; background: #ffffff; padding: 30px; max-width: 800px; margin: 0 auto; line-height: 1.6; }
        .header { border-bottom: 2px solid #DCE5D8; padding-bottom: 15px; margin-bottom: 25px; text-align: center; }
        .brand { font-size: 24px; font-weight: bold; color: #A65F73; letter-spacing: 1px; }
        .tagline { font-size: 12px; color: #735760; font-style: italic; margin-bottom: 10px; }
        h1 { font-size: 26px; margin: 10px 0 5px 0; color: #49343B; }
        .specs { background: #FFF9F7; border: 1px solid #DCE5D8; padding: 15px; border-radius: 8px; margin-bottom: 25px; font-size: 13px; }
        .specs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .section-title { font-size: 18px; font-weight: bold; color: #A65F73; border-bottom: 1px solid #DCE5D8; padding-bottom: 5px; margin-top: 25px; margin-bottom: 12px; }
        ul { padding-left: 20px; font-size: 13px; }
        li { margin-bottom: 6px; }
        .step { background: #fafafa; border: 1px solid #eee; padding: 12px; border-radius: 6px; margin-bottom: 12px; font-size: 13px; }
        .step-title { font-weight: bold; color: #A65F73; margin-bottom: 4px; }
        .footer { margin-top: 40px; border-top: 1px solid #eee; padding-top: 15px; text-align: center; font-size: 11px; color: #999; }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="brand">MyCrochify</div>
        <div class="tagline">Your Creative World of Crochet — Official Pattern Release</div>
        <h1>${pattern.title}</h1>
        <div style="font-size: 13px; color: #735760;">${pattern.subcategory} · Skill Level: ${pattern.difficulty} · Estimated Time: ${pattern.estimatedTime}</div>
      </div>
      <div class="specs">
        <div class="specs-grid">
          <div><strong>Hook Size:</strong> ${pattern.hookSize}</div>
          <div><strong>Yarn Weight:</strong> ${pattern.yarnWeight}</div>
          <div><strong>Finished Size:</strong> ${pattern.finishedSize}</div>
          <div><strong>Gauge:</strong> ${pattern.gauge}</div>
        </div>
        <div style="margin-top: 10px;"><strong>Yarn Recommendation:</strong> ${pattern.yarnRecommendation}</div>
      </div>
      <div class="section-title">Required Materials</div>
      <ul>
        ${pattern.materials.map(m => `<li>${m}</li>`).join('')}
      </ul>
      <div class="section-title">Abbreviations (US Terms)</div>
      <ul>
        ${pattern.abbreviations.map(a => `<li><strong>${a.term}:</strong> ${a.meaning}</li>`).join('')}
      </ul>
      <div class="section-title">Pattern Instructions</div>
      ${pattern.steps.map(s => `
        <div class="step">
          <div class="step-title">${s.round} ${s.stitchCount ? `[${s.stitchCount}]` : ''}</div>
          <div>${s.instructions}</div>
          ${s.tip ? `<div style="font-style: italic; color: #735760; margin-top: 4px; font-size: 12px;">Tip: ${s.tip}</div>` : ''}
        </div>
      `).join('')}
      <div class="footer">
        © 2026 MyCrochify. For personal use only. Happy crocheting!
      </div>
    </body>
    </html>
  `;

  try {
    const doc = printIframe.contentWindow.document;
    doc.open();
    doc.write(html);
    doc.close();
    showToast(`Opening printable PDF dialog for "${pattern.title}"...`);
    setTimeout(() => {
      printIframe.contentWindow.focus();
      printIframe.contentWindow.print();
    }, 400);
  } catch {
    window.print();
  }
};

// UI Modal Controls
window.openSearch = function() {
  document.getElementById('search-modal').classList.remove('hidden');
  setTimeout(() => document.getElementById('search-input')?.focus(), 100);
};

window.closeSearch = function() {
  document.getElementById('search-modal').classList.add('hidden');
};

window.openFavorites = function() {
  renderFavoritesDrawer();
  document.getElementById('favorites-drawer').classList.remove('hidden');
};

window.closeFavorites = function() {
  document.getElementById('favorites-drawer').classList.add('hidden');
};

window.openCart = function() {
  renderCartDrawer();
  document.getElementById('cart-drawer').classList.remove('hidden');
};

window.closeCart = function() {
  document.getElementById('cart-drawer').classList.add('hidden');
};

// Badge Updates
function updateBadges() {
  const favBadge = document.getElementById('fav-count-badge');
  if (favBadge) {
    favBadge.textContent = state.favorites.length;
    favBadge.style.display = state.favorites.length > 0 ? 'flex' : 'none';
  }

  const cartBadge = document.getElementById('cart-count-badge');
  if (cartBadge) {
    cartBadge.textContent = state.cart.length;
    cartBadge.style.display = state.cart.length > 0 ? 'inline-block' : 'none';
  }
}

// Card Renderer Helper
function renderPatternCard(p) {
  const isFav = state.favorites.includes(p.id);
  return `
    <article onclick="navigateTo('pattern', '${p.id}')" class="group relative flex flex-col bg-white rounded-3xl border border-[#EDE7DF] overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#DCE5D8] hover:-translate-y-1 cursor-pointer">
      <div class="relative aspect-[4/3] w-full bg-[#EDE7DF] overflow-hidden">
        <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#49343B]/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        <div class="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          <span class="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide shadow-2xs pointer-events-auto backdrop-blur-xs ${p.isFree ? 'bg-[#FFF9F7]/95 text-[#49343B] border border-[#DCE5D8]' : 'bg-[#A65F73] text-white shadow-xs'}">
            ${p.isFree ? 'Free Pattern' : `Premium PDF · $${p.price.toFixed(2)}`}
          </span>
          <button onclick="event.stopPropagation(); toggleFavorite('${p.id}');" class="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 pointer-events-auto shadow-xs ${isFav ? 'bg-[#A65F73] text-white scale-105' : 'bg-white/90 text-[#735760] hover:text-[#A65F73] hover:bg-white'}">
            <svg class="w-4 h-4 ${isFav ? 'fill-white stroke-white' : 'stroke-current'}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
        <div class="absolute bottom-3 left-3 pointer-events-none">
          <span class="bg-[#DCE5D8]/90 backdrop-blur-xs text-[10px] font-medium uppercase tracking-wider text-[#49343B] px-2.5 py-0.5 rounded-md border border-[#C8D4C3]">
            ${p.difficulty}
          </span>
        </div>
      </div>
      <div class="p-5 flex flex-col flex-1 bg-white">
        <div class="flex items-center gap-1.5 text-[11px] font-medium text-[#735760] mb-1.5">
          <span class="uppercase tracking-wider">${p.subcategory}</span>
          <span class="text-[#C8D4C3]">·</span>
          <span>${p.estimatedTime}</span>
        </div>
        <h3 class="font-serif text-lg font-semibold text-[#49343B] group-hover:text-[#A65F73] transition-colors line-clamp-1 mb-1.5">
          ${p.title}
        </h3>
        <p class="text-xs text-[#735760] line-clamp-2 leading-relaxed mb-4 flex-1">
          ${p.description}
        </p>
        <div class="text-[11px] text-[#735760] mb-4 flex items-center justify-between pt-2 border-t border-[#EDE7DF]">
          <span>Hook: ${p.hookSize.split('(')[0]}</span>
          <span class="text-[#A65F73]">★ ${p.rating} (${p.reviewsCount})</span>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="event.stopPropagation(); navigateTo('pattern', '${p.id}');" class="flex-1 py-2.5 px-4 text-xs font-semibold text-[#49343B] bg-[#FFF9F7] hover:bg-[#EDE7DF] border border-[#DCE5D8] rounded-full transition-all duration-200 flex items-center justify-center gap-1.5 group-hover:border-[#A65F73] cursor-pointer">
            <span>View Pattern</span>
          </button>
          ${p.isFree ? `
            <button onclick="event.stopPropagation(); downloadPatternPDF('${p.id}');" title="Download Printable PDF" class="p-2.5 rounded-full bg-[#EDE7DF] text-[#49343B] hover:bg-[#A65F73] hover:text-white transition-colors cursor-pointer">
              <svg class="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          ` : ''}
        </div>
      </div>
    </article>
  `;
}

// VIEW: Home Page
function renderHomeView() {
  const trendingFiltered = PATTERNS.filter(p => state.trendingFilter === 'all' || p.category === state.trendingFilter);
  const freePatterns = PATTERNS.filter(p => p.isFree);

  return `
    <!-- 2.B Hero Section -->
    <section class="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-[#FFF9F7]">
      <div class="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#DCE5D8]/60 via-[#EDE7DF]/40 to-transparent blur-3xl opacity-80"></div>
      <div class="pointer-events-none absolute top-1/2 -left-32 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#E8BFC5]/20 via-[#DCE5D8]/30 to-transparent blur-2xl opacity-60"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div class="lg:col-span-6 flex flex-col justify-center">
            <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#735760] mb-4">
              <span class="text-[#A65F73]">Your Creative World of Crochet</span>
              <span class="text-[#C8D4C3]">·</span>
              <span>Free & Premium Patterns</span>
            </div>
            <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#49343B] leading-[1.12] mb-6">
              Little Stitches, <br class="hidden sm:inline" />
              <span class="italic font-medium text-[#A65F73]">Beautiful Creations.</span>
            </h1>
            <p class="text-base sm:text-lg text-[#735760] leading-relaxed mb-8 max-w-xl font-normal">
              Discover beautiful crochet patterns, learn new techniques, and bring your creative ideas to life, one stitch at a time.
            </p>
            <div class="flex flex-wrap items-center gap-4 mb-10">
              <button onclick="navigateTo('category', 'free')" class="group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold tracking-wide text-white bg-[#A65F73] hover:bg-[#8F4C5F] active:scale-[0.99] rounded-full transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap">
                <span>Explore Patterns</span>
                <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button onclick="navigateTo('category', 'tutorials')" class="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#49343B] bg-white hover:bg-[#EDE7DF] border border-[#DCE5D8] rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap hover:border-[#A65F73]">
                <span>Start Creating</span>
              </button>
            </div>
            <div class="pt-6 border-t border-[#EDE7DF] grid grid-cols-3 gap-4">
              <div>
                <span class="font-serif text-2xl font-semibold text-[#49343B] tabular-nums block">100%</span>
                <span class="text-[11px] text-[#735760] uppercase tracking-wider block mt-0.5">Tested Patterns</span>
              </div>
              <div>
                <span class="font-serif text-2xl font-semibold text-[#49343B] tabular-nums block">PDF</span>
                <span class="text-[11px] text-[#735760] uppercase tracking-wider block mt-0.5">Instant Downloads</span>
              </div>
              <div>
                <span class="font-serif text-2xl font-semibold text-[#49343B] tabular-nums block">Step-by-Step</span>
                <span class="text-[11px] text-[#735760] uppercase tracking-wider block mt-0.5">Photo Tutorials</span>
              </div>
            </div>
          </div>
          <div class="lg:col-span-6 relative">
            <div class="relative mx-auto max-w-lg lg:max-w-none">
              <div class="relative rounded-3xl overflow-hidden bg-[#EDE7DF]/60 p-2.5 sm:p-3 border border-[#DCE5D8] shadow-lg">
                <div class="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-[#EDE7DF]">
                  <img src="${HERO_IMAGE}" alt="Crochet creations in natural light" class="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105" />
                  <div class="absolute inset-0 bg-gradient-to-t from-[#49343B]/30 via-transparent to-transparent pointer-events-none"></div>
                  <div class="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-[#FFF9F7]/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-[#DCE5D8] shadow-md max-w-xs">
                    <p class="text-[11px] uppercase tracking-wider text-[#A65F73] font-semibold">Featured Free Pattern</p>
                    <p class="font-serif text-base text-[#49343B] font-medium leading-tight">Heirloom Rose Waffle Blanket</p>
                    <p class="text-xs text-[#735760] mt-0.5">Easy difficulty · Complete video & chart</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2.C Explore Our Collections -->
    <section class="py-20 sm:py-24 bg-[#DCE5D8]/30 border-y border-[#DCE5D8]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#A65F73] mb-2">Curated Categories</p>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#49343B] tracking-tight mb-4">Find Your Next Creative Project</h2>
          <p class="text-sm sm:text-base text-[#735760]">A little inspiration for every stitch, every season, and every imagination.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <div onclick="navigateTo('category', 'baby')" class="rounded-3xl border border-[#EDE7DF] overflow-hidden bg-[#FFF9F7] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer hover:-translate-y-1">
            <div class="relative aspect-[16/10] overflow-hidden bg-[#EDE7DF]">
              <img src="${BABY_IMAGE}" alt="Baby Crochet" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div class="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="font-serif text-2xl font-semibold text-[#49343B] group-hover:text-[#A65F73] transition-colors mb-2">Baby Crochet</h3>
                <p class="text-sm text-[#735760] leading-relaxed mb-6">Sweet handmade creations for life's little moments.</p>
                <div class="grid grid-cols-2 gap-2.5 mb-8 text-xs text-[#49343B]">
                  <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#A65F73]"></span>Baby blankets</span>
                  <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#A65F73]"></span>Baby booties</span>
                  <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#A65F73]"></span>Baby cardigans</span>
                  <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#A65F73]"></span>Baby bonnets</span>
                  <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#A65F73]"></span>Baby toys</span>
                  <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#A65F73]"></span>Nursery decor</span>
                </div>
              </div>
              <button class="w-full py-3 px-5 rounded-full text-xs font-semibold text-white bg-[#A65F73] hover:bg-[#8F4C5F] transition-all flex items-center justify-center gap-2">
                <span>Explore Baby Patterns</span>
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </div>
          </div>

          <div onclick="navigateTo('category', 'amigurumi')" class="rounded-3xl border border-[#DCE5D8] overflow-hidden bg-[#EDE7DF]/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer hover:-translate-y-1">
            <div class="relative aspect-[16/10] overflow-hidden bg-[#EDE7DF]">
              <img src="${AMIGURUMI_IMAGE}" alt="Amigurumi" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div class="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="font-serif text-2xl font-semibold text-[#49343B] group-hover:text-[#A65F73] transition-colors mb-2">Amigurumi Patterns</h3>
                <p class="text-sm text-[#735760] leading-relaxed mb-6">Meet your next adorable handmade companion.</p>
                <div class="grid grid-cols-2 gap-2.5 mb-8 text-xs text-[#49343B]">
                  <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#A65F73]"></span>Crochet animals</span>
                  <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#A65F73]"></span>Teddy bears</span>
                  <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#A65F73]"></span>Crochet dolls</span>
                  <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#A65F73]"></span>Cute characters</span>
                  <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#A65F73]"></span>Food amigurumi</span>
                  <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#A65F73]"></span>Miniature creations</span>
                </div>
              </div>
              <button class="w-full py-3 px-5 rounded-full text-xs font-semibold text-white bg-[#A65F73] hover:bg-[#8F4C5F] transition-all flex items-center justify-center gap-2">
                <span>Explore Amigurumi</span>
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </div>
          </div>

          <div onclick="navigateTo('category', 'christmas')" class="rounded-3xl border border-[#EDE7DF] overflow-hidden bg-[#FFF9F7] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer hover:-translate-y-1">
            <div class="relative aspect-[16/10] overflow-hidden bg-[#EDE7DF]">
              <img src="${CHRISTMAS_IMAGE}" alt="Christmas Crochet" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div class="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="font-serif text-2xl font-semibold text-[#49343B] group-hover:text-[#A65F73] transition-colors mb-2">Christmas Crochet</h3>
                <p class="text-sm text-[#735760] leading-relaxed mb-6">Make the holidays extra special with handmade magic.</p>
                <div class="grid grid-cols-2 gap-2.5 mb-8 text-xs text-[#49343B]">
                  <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#A65F73]"></span>Santa Claus</span>
                  <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#A65F73]"></span>Reindeer</span>
                  <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#A65F73]"></span>Christmas elves</span>
                  <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#A65F73]"></span>Christmas ornaments</span>
                  <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#A65F73]"></span>Christmas trees</span>
                  <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#A65F73]"></span>Festive decorations</span>
                </div>
              </div>
              <button class="w-full py-3 px-5 rounded-full text-xs font-semibold text-white bg-[#A65F73] hover:bg-[#8F4C5F] transition-all flex items-center justify-center gap-2">
                <span>Explore Christmas</span>
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </div>
          </div>

          <div onclick="navigateTo('category', 'tutorials')" class="rounded-3xl border border-[#DCE5D8] overflow-hidden bg-[#EDE7DF]/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer hover:-translate-y-1">
            <div class="relative aspect-[16/10] overflow-hidden bg-[#EDE7DF]">
              <img src="${TUTORIAL_IMAGE}" alt="Crochet Tutorials" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div class="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="font-serif text-2xl font-semibold text-[#49343B] group-hover:text-[#A65F73] transition-colors mb-2">Crochet Tutorials</h3>
                <p class="text-sm text-[#735760] leading-relaxed mb-6">Learn, practice, and grow your crochet skills.</p>
                <div class="grid grid-cols-2 gap-2.5 mb-8 text-xs text-[#49343B]">
                  <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#A65F73]"></span>Beginner tutorials</span>
                  <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#A65F73]"></span>Crochet stitches</span>
                  <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#A65F73]"></span>Step-by-step projects</span>
                  <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#A65F73]"></span>Advanced techniques</span>
                  <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#A65F73]"></span>Tips and tricks</span>
                </div>
              </div>
              <button class="w-full py-3 px-5 rounded-full text-xs font-semibold text-white bg-[#A65F73] hover:bg-[#8F4C5F] transition-all flex items-center justify-center gap-2">
                <span>Start Learning</span>
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2.D Trending Crochet Patterns -->
    <section class="py-20 sm:py-24 bg-[#FFF9F7]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#A65F73] mb-2">Most Loved by Crocheters</p>
            <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#49343B] tracking-tight">Popular Patterns You'll Love</h2>
          </div>
          <div class="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0">
            ${['all', 'baby', 'amigurumi', 'christmas', 'clothing'].map(cat => `
              <button onclick="state.trendingFilter = '${cat}'; render();" class="px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer whitespace-nowrap ${state.trendingFilter === cat ? 'bg-[#A65F73] text-white font-semibold shadow-xs' : 'bg-[#EDE7DF] text-[#49343B] hover:bg-[#DCE5D8]'}">
                ${cat === 'all' ? 'All Projects' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            `).join('')}
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          ${trendingFiltered.slice(0, 8).map(renderPatternCard).join('')}
        </div>
      </div>
    </section>

    <!-- 2.E Beginner-Friendly Section (Soft Sage #DCE5D8) -->
    <section class="py-20 sm:py-24 bg-[#DCE5D8] border-y border-[#C8D4C3] relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF9F7] text-xs font-semibold uppercase tracking-[0.18em] text-[#49343B] mb-3 shadow-2xs border border-[#C8D4C3]">
            <span class="w-2 h-2 rounded-full bg-[#A65F73]"></span>
            <span>Beginner Friendly</span>
          </span>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#49343B] tracking-tight mb-4">Your Crochet Journey Starts Here.</h2>
          <p class="text-sm sm:text-base text-[#49343B]/80 leading-relaxed">Every beautiful creation begins with a single stitch. Whether you have never held a hook or want to refresh your technique, our gentle guides will support you every step of the way.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          ${[
            { id: 'crochet-basics-for-beginners', title: 'Crochet Basics', desc: 'Master the slip knot, yarn hold, and foundation chain tension with gentle patience.', time: '6 min read' },
            { id: 'essential-crochet-tools-guide', title: 'Essential Tools', desc: 'Discover the ergonomic rosewood hooks, stitch markers, and yarns that prevent hand fatigue.', time: '5 min read' },
            { id: 'how-to-read-crochet-patterns', title: 'How to Read Patterns', desc: 'Unpack US vs. UK terminology, repeat asterisks, and abbreviations without confusion.', time: '8 min read' },
            { id: 'mastering-the-rose-petal-stitch', title: 'Basic Stitches', desc: 'Clear photo breakdowns of single crochet, half double crochet, and double crochet.', time: '7 min read' }
          ].map(g => `
            <div onclick="navigateTo('tutorial', '${g.id}')" class="bg-[#FFF9F7] rounded-3xl p-6 border border-[#EDE7DF] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1">
              <div>
                <h3 class="font-serif text-lg font-semibold text-[#49343B] group-hover:text-[#A65F73] transition-colors mb-2">${g.title}</h3>
                <p class="text-xs text-[#735760] leading-relaxed mb-4">${g.desc}</p>
              </div>
              <div class="pt-3 border-t border-[#EDE7DF] flex items-center justify-between text-xs text-[#A65F73] font-medium">
                <span>${g.time}</span>
                <span>Read Guide →</span>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="text-center">
          <button onclick="navigateTo('category', 'tutorials')" class="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold tracking-wide text-white bg-[#A65F73] hover:bg-[#8F4C5F] active:scale-[0.99] transition-all shadow-sm hover:shadow-md cursor-pointer">
            <span>Learn Crochet — Full Tutorial Library</span>
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
        </div>
      </div>
    </section>

    <!-- 2.F Seasonal Inspiration -->
    <section class="py-20 sm:py-24 bg-[#FFF9F7]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#A65F73] mb-2">The Crochet Calendar</p>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#49343B] tracking-tight mb-4">Celebrate Every Season with Crochet</h2>
          <p class="text-sm sm:text-base text-[#735760]">From twinkling Christmas trees to blooming spring roses, find the perfect handmade project for every time of the year.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          ${[
            { title: 'Christmas & Holiday Magic', season: 'Holiday Season · 18 Patterns', desc: 'Lace snowflakes, festive reindeer, and evergreen tree ornaments to trim your home in warmth.', img: CHRISTMAS_IMAGE, action: "navigateTo('category', 'christmas')" },
            { title: 'Spring Blooms & Floral Stitches', season: 'Springtime · 14 Patterns', desc: 'Everlasting crocheted roses, delicate pastel tea doilies, and vibrant botanical bouquets.', img: BOUQUET_IMAGE, action: "navigateTo('pattern', 'eternal-prairie-rose-bouquet')" },
            { title: 'Easter Bunnies & Companions', season: 'Easter & Nursery · 12 Patterns', desc: 'Charming amigurumi bunnies, soft fawn companions, and miniature egg warmer cozies.', img: AMIGURUMI_IMAGE, action: "navigateTo('category', 'amigurumi')" },
            { title: 'Cozy Winter Knitwear & Throws', season: 'Autumn / Winter · 16 Patterns', desc: 'Chunky cable cardigans, thermal waffle throws, and delicate berets to chase away the chill.', img: CARDIGAN_IMAGE, action: "navigateTo('pattern', 'the-wild-rose-cable-cardigan')" }
          ].map(s => `
            <div onclick="${s.action}" class="group relative rounded-3xl overflow-hidden bg-[#EDE7DF] border border-[#DCE5D8] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1">
              <div class="relative aspect-[4/5] overflow-hidden">
                <img src="${s.img}" alt="${s.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div class="absolute inset-0 bg-gradient-to-t from-[#49343B]/85 via-[#49343B]/30 to-transparent"></div>
                <div class="absolute inset-x-0 bottom-0 p-6 text-white flex flex-col justify-end">
                  <span class="text-[10px] font-semibold uppercase tracking-wider text-[#DCE5D8] mb-1">${s.season}</span>
                  <h3 class="font-serif text-xl font-medium leading-snug mb-2 group-hover:text-[#E8BFC5] transition-colors">${s.title}</h3>
                  <p class="text-xs text-white/80 line-clamp-2 leading-relaxed mb-4">${s.desc}</p>
                  <span class="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DCE5D8] group-hover:text-[#E8BFC5]">Explore Season →</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 2.G Free Crochet Patterns -->
    <section class="py-20 sm:py-24 bg-[#EDE7DF]/35 border-t border-[#EDE7DF]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span class="text-xs font-semibold uppercase tracking-[0.2em] text-[#A65F73] mb-2 block">100% Free Library</span>
            <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#49343B] tracking-tight">Beautiful Creations, Free to Make</h2>
            <p class="text-sm text-[#735760] mt-2 max-w-xl">Complete written row-by-row instructions, printable options, and stitch counts. No hidden fees or subscriptions.</p>
          </div>
          <button onclick="navigateTo('category', 'free')" class="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-[#49343B] bg-white border border-[#DCE5D8] hover:bg-[#DCE5D8] transition-all cursor-pointer whitespace-nowrap shadow-2xs">
            <span>Explore All Free Patterns</span>
            <svg class="w-3.5 h-3.5 text-[#A65F73]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          ${freePatterns.slice(0, 6).map(renderPatternCard).join('')}
        </div>
      </div>
    </section>

    <!-- 2.H Newsletter Section (Soft Sage #DCE5D8) -->
    <section class="py-20 sm:py-24 bg-[#DCE5D8]/60 border-t border-[#C8D4C3] relative overflow-hidden">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#49343B] tracking-tight mb-3">A Little Inspiration in Your Inbox</h2>
        <p class="text-sm sm:text-base text-[#735760] max-w-xl mx-auto mb-8">Join our creative community and receive beautiful crochet patterns, tutorials, and fresh inspiration every week.</p>
        <form onsubmit="event.preventDefault(); showToast('Subscribed! Check your inbox for your free PDF pattern.'); this.reset();" class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input required type="email" placeholder="Your favorite email address..." class="flex-1 px-5 py-3.5 text-xs bg-white border border-[#C8D4C3] rounded-full text-[#49343B] placeholder-[#735760]/70 focus:outline-none focus:border-[#A65F73]" />
          <button type="submit" class="px-7 py-3.5 rounded-full text-xs font-semibold text-white bg-[#A65F73] hover:bg-[#8F4C5F] transition-all shadow-xs cursor-pointer">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  `;
}

// VIEW: Category Page
function renderCategoryView(categoryId) {
  const meta = CATEGORY_INFO[categoryId] || CATEGORY_INFO.baby;

  // Filter items
  let filtered = PATTERNS.filter(p => {
    let catMatch = false;
    if (categoryId === 'free') catMatch = p.isFree;
    else if (categoryId === 'baby') catMatch = p.category === 'baby';
    else if (categoryId === 'amigurumi') catMatch = p.category === 'amigurumi';
    else if (categoryId === 'christmas') catMatch = p.category === 'christmas';
    else catMatch = true;

    const subMatch = state.categoryFilter.sub === 'All' || state.categoryFilter.sub.startsWith('All ') || p.subcategory.toLowerCase().includes(state.categoryFilter.sub.toLowerCase());
    const diffMatch = state.categoryFilter.difficulty === 'All' || p.difficulty === state.categoryFilter.difficulty;
    const priceMatch = state.categoryFilter.pricing === 'all' ? true : state.categoryFilter.pricing === 'free' ? p.isFree : !p.isFree;
    const searchMatch = !state.categoryFilter.search ? true : p.title.toLowerCase().includes(state.categoryFilter.search.toLowerCase()) || p.description.toLowerCase().includes(state.categoryFilter.search.toLowerCase());

    return catMatch && subMatch && diffMatch && priceMatch && searchMatch;
  });

  const isTutorialsCat = categoryId === 'tutorials';
  const tutFiltered = TUTORIAL_ARTICLES.filter(t => {
    const subMatch = state.categoryFilter.sub === 'All' || state.categoryFilter.sub.startsWith('All ') || t.subcategory.toLowerCase().includes(state.categoryFilter.sub.toLowerCase());
    const searchMatch = !state.categoryFilter.search ? true : t.title.toLowerCase().includes(state.categoryFilter.search.toLowerCase()) || t.summary.toLowerCase().includes(state.categoryFilter.search.toLowerCase());
    return subMatch && searchMatch;
  });

  const otherCats = Object.keys(CATEGORY_INFO).filter(c => c !== categoryId);

  return `
    <!-- Category Banner in Soft Sage (#DCE5D8) -->
    <section class="relative overflow-hidden bg-[#DCE5D8] border-b border-[#C8D4C3] py-12 sm:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-2 text-xs text-[#49343B]/80 mb-6 font-medium">
          <button onclick="navigateTo('home')" class="hover:text-[#A65F73] transition-colors cursor-pointer">Home</button>
          <span>/</span>
          <span class="text-[#49343B] font-semibold">${meta.title}</span>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-7">
            <span class="text-xs font-semibold uppercase tracking-[0.2em] text-[#A65F73] block mb-2">MyCrochify Collection</span>
            <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#49343B] tracking-tight mb-4">${meta.title}</h1>
            <p class="text-base text-[#49343B]/90 font-serif italic mb-4">"${meta.tagline}"</p>
            <p class="text-sm sm:text-base text-[#49343B]/80 leading-relaxed max-w-2xl">${meta.description}</p>
          </div>
          <div class="lg:col-span-5">
            <div class="relative rounded-3xl overflow-hidden bg-[#FFF9F7] p-2 border border-[#C8D4C3] shadow-md max-w-md mx-auto">
              <div class="aspect-[16/11] rounded-2xl overflow-hidden bg-[#EDE7DF]">
                <img src="${meta.bannerImage}" alt="${meta.title}" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Content & Filter Toolbar -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
      <!-- Subcategory Tabs -->
      <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#EDE7DF]">
        ${meta.subcategories.map(sub => {
          const isActive = state.categoryFilter.sub === sub || (state.categoryFilter.sub === 'All' && sub.startsWith('All '));
          return `
            <button onclick="state.categoryFilter.sub = '${sub}'; render();" class="px-4 py-2 rounded-full text-xs font-medium cursor-pointer whitespace-nowrap ${isActive ? 'bg-[#A65F73] text-white shadow-xs font-semibold' : 'bg-white text-[#49343B] border border-[#DCE5D8] hover:bg-[#EDE7DF]'}">
              ${sub}
            </button>
          `;
        }).join('')}
      </div>

      <!-- Filters Bar -->
      <div class="bg-[#EDE7DF]/50 rounded-2xl p-4 border border-[#DCE5D8] mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        <div class="relative flex-1">
          <input type="text" placeholder="Search in ${meta.title.toLowerCase()}..." value="${state.categoryFilter.search}" oninput="state.categoryFilter.search = this.value; render();" class="w-full pl-4 pr-4 py-2 text-xs bg-white border border-[#DCE5D8] rounded-full text-[#49343B] focus:outline-none focus:border-[#A65F73]" />
        </div>
        <div class="flex items-center gap-3 text-xs text-[#735760]">
          <span>Skill Level:</span>
          <select onchange="state.categoryFilter.difficulty = this.value; render();" class="py-1.5 px-3 bg-white border border-[#DCE5D8] rounded-full text-xs text-[#49343B] focus:outline-none focus:border-[#A65F73]">
            <option value="All" ${state.categoryFilter.difficulty === 'All' ? 'selected' : ''}>All Levels</option>
            <option value="Beginner" ${state.categoryFilter.difficulty === 'Beginner' ? 'selected' : ''}>Beginner</option>
            <option value="Easy" ${state.categoryFilter.difficulty === 'Easy' ? 'selected' : ''}>Easy</option>
            <option value="Intermediate" ${state.categoryFilter.difficulty === 'Intermediate' ? 'selected' : ''}>Intermediate</option>
          </select>
          ${!isTutorialsCat && categoryId !== 'free' ? `
            <span class="ml-2">Type:</span>
            <select onchange="state.categoryFilter.pricing = this.value; render();" class="py-1.5 px-3 bg-white border border-[#DCE5D8] rounded-full text-xs text-[#49343B] focus:outline-none focus:border-[#A65F73]">
              <option value="all" ${state.categoryFilter.pricing === 'all' ? 'selected' : ''}>All</option>
              <option value="free" ${state.categoryFilter.pricing === 'free' ? 'selected' : ''}>Free Only</option>
              <option value="premium" ${state.categoryFilter.pricing === 'premium' ? 'selected' : ''}>Premium PDF</option>
            </select>
          ` : ''}
        </div>
      </div>

      <!-- Items Grid -->
      ${isTutorialsCat ? `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${tutFiltered.map(t => `
            <article onclick="navigateTo('tutorial', '${t.id}')" class="group bg-white rounded-3xl border border-[#EDE7DF] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#DCE5D8] transition-all flex flex-col cursor-pointer hover:-translate-y-1">
              <div class="aspect-[16/10] overflow-hidden bg-[#EDE7DF] relative">
                <img src="${t.image}" alt="${t.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span class="absolute top-3 left-3 bg-[#DCE5D8] text-[10px] uppercase tracking-wider font-semibold text-[#49343B] px-2.5 py-0.5 rounded-full border border-[#C8D4C3]">${t.difficulty}</span>
              </div>
              <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div class="flex items-center gap-2 text-[11px] text-[#735760] mb-1.5">
                    <span class="uppercase">${t.subcategory}</span>
                    <span class="text-[#C8D4C3]">·</span>
                    <span>${t.readTime}</span>
                  </div>
                  <h3 class="font-serif text-lg font-semibold text-[#49343B] group-hover:text-[#A65F73] mb-2">${t.title}</h3>
                  <p class="text-xs text-[#735760] line-clamp-3 mb-6">${t.summary}</p>
                </div>
                <button class="w-full py-2.5 px-4 rounded-full text-xs font-semibold text-white bg-[#A65F73] hover:bg-[#8F4C5F] transition-colors">Read Tutorial</button>
              </div>
            </article>
          `).join('')}
        </div>
      ` : `
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          ${filtered.length > 0 ? filtered.map(renderPatternCard).join('') : `
            <div class="col-span-full text-center py-16 bg-white rounded-3xl border border-[#EDE7DF] p-8">
              <p class="font-serif text-xl text-[#49343B] mb-2">No patterns match your active filters</p>
              <button onclick="state.categoryFilter.sub = 'All'; state.categoryFilter.difficulty = 'All'; state.categoryFilter.pricing = 'all'; state.categoryFilter.search = ''; render();" class="mt-4 px-6 py-2 text-xs font-semibold text-white bg-[#A65F73] rounded-full">Reset Filters</button>
            </div>
          `}
        </div>
      `}

      <!-- Other Categories -->
      <div class="mt-20 pt-10 border-t border-[#EDE7DF]">
        <h3 class="font-serif text-xl font-medium text-[#49343B] mb-4">Explore Other Collections</h3>
        <div class="flex flex-wrap gap-3">
          ${otherCats.map(c => `
            <button onclick="navigateTo('category', '${c}')" class="px-5 py-2.5 bg-white border border-[#DCE5D8] rounded-full text-xs font-medium text-[#49343B] hover:bg-[#DCE5D8] transition-all cursor-pointer shadow-2xs">
              ${CATEGORY_INFO[c].title} →
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// VIEW: Pattern Detail Page
function renderPatternDetailView(patternId) {
  const p = PATTERNS.find(item => item.id === patternId) || PATTERNS[0];
  const isFav = state.favorites.includes(p.id);
  const related = PATTERNS.filter(item => item.id !== p.id && item.category === p.category).slice(0, 3);

  return `
    <!-- Top Action Bar -->
    <div class="border-b border-[#EDE7DF] bg-[#FFF9F7]/90 backdrop-blur-xs py-3.5 sticky top-20 z-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <button onclick="navigateTo('home')" class="flex items-center gap-2 text-xs font-medium text-[#735760] hover:text-[#A65F73] cursor-pointer">
          ← Back to Patterns
        </button>
        <div class="flex items-center gap-3">
          <button onclick="navigator.clipboard.writeText(window.location.href); showToast('Link copied to clipboard!');" class="p-2 sm:px-3 sm:py-1.5 rounded-full border border-[#DCE5D8] text-xs font-medium text-[#49343B] hover:bg-[#EDE7DF] cursor-pointer">
            Share
          </button>
          <button onclick="toggleFavorite('${p.id}')" class="p-2 sm:px-3 sm:py-1.5 rounded-full border text-xs font-medium cursor-pointer ${isFav ? 'bg-[#A65F73] text-white border-[#A65F73]' : 'bg-white border-[#DCE5D8] text-[#49343B] hover:bg-[#EDE7DF]'}">
            ${isFav ? 'Saved ♥' : 'Save ♡'}
          </button>
          <button onclick="${p.isFree ? `downloadPatternPDF('${p.id}')` : `addToCart('${p.id}')`}" class="p-2 sm:px-4 sm:py-1.5 rounded-full bg-[#A65F73] text-white text-xs font-semibold hover:bg-[#8F4C5F] cursor-pointer shadow-xs">
            ${p.isFree ? 'Print / PDF' : `Buy PDF · $${p.price.toFixed(2)}`}
          </button>
        </div>
      </div>
    </div>

    <!-- Main Pattern Details -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
        <div class="lg:col-span-7 space-y-4">
          <div class="relative rounded-3xl overflow-hidden bg-[#EDE7DF] border border-[#DCE5D8] shadow-lg">
            <div class="aspect-[4/3]">
              <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover" />
            </div>
            <div class="absolute top-4 left-4">
              <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide backdrop-blur-md shadow-xs ${p.isFree ? 'bg-[#FFF9F7]/95 text-[#49343B] border border-[#DCE5D8]' : 'bg-[#A65F73] text-white'}">
                ${p.isFree ? '100% Free Pattern' : `Premium PDF Edition · $${p.price.toFixed(2)}`}
              </span>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 text-xs font-semibold text-[#735760] mb-2 uppercase tracking-wider">
              <span>${p.subcategory}</span>
              <span class="text-[#C8D4C3]">·</span>
              <span class="text-[#A65F73]">${p.difficulty} Level</span>
            </div>
            <h1 class="font-serif text-3xl sm:text-4xl text-[#49343B] font-semibold leading-tight mb-2">${p.title}</h1>
            <p class="font-serif italic text-base text-[#A65F73] mb-4">"${p.tagline}"</p>
            <div class="flex items-center gap-2 text-xs text-[#735760] mb-6 pb-4 border-b border-[#EDE7DF]">
              <span class="text-[#A65F73]">★★★★★</span>
              <span class="font-semibold text-[#49343B]">${p.rating}</span>
              <span>(${p.reviewsCount} reviews)</span>
            </div>
            <p class="text-sm text-[#735760] leading-relaxed mb-6">${p.description}</p>

            <!-- Technical Specs Box (Soft Linen with Sage border) -->
            <div class="bg-[#EDE7DF]/50 rounded-2xl p-4 border border-[#DCE5D8] mb-6 space-y-2.5 text-xs text-[#735760]">
              <div class="flex justify-between">
                <span class="font-medium text-[#49343B]">Hook Size:</span>
                <span class="font-semibold text-[#A65F73]">${p.hookSize}</span>
              </div>
              <div class="flex justify-between">
                <span class="font-medium text-[#49343B]">Yarn Weight:</span>
                <span class="text-right text-[#49343B]">${p.yarnWeight}</span>
              </div>
              <div class="flex justify-between">
                <span class="font-medium text-[#49343B]">Finished Dimensions:</span>
                <span class="text-right text-[#49343B]">${p.finishedSize}</span>
              </div>
              <div class="flex justify-between">
                <span class="font-medium text-[#49343B]">Estimated Craft Time:</span>
                <span class="text-right text-[#49343B]">${p.estimatedTime}</span>
              </div>
              <div class="flex justify-between">
                <span class="font-medium text-[#49343B]">Gauge Swatch:</span>
                <span class="text-right text-[#49343B]">${p.gauge}</span>
              </div>
            </div>

            <!-- Primary Action Box -->
            <div class="p-5 rounded-2xl bg-white border border-[#EDE7DF] shadow-xs mb-6">
              ${p.isFree ? `
                <div class="flex items-center justify-between mb-3">
                  <div>
                    <span class="text-xs font-semibold text-[#49343B] block">Free Online Pattern</span>
                    <span class="text-[11px] text-[#735760]">Read below or download printable copy</span>
                  </div>
                  <span class="font-serif text-xl font-bold text-[#A65F73]">$0.00</span>
                </div>
                <button onclick="downloadPatternPDF('${p.id}')" class="w-full py-3 px-6 rounded-full text-xs font-semibold text-white bg-[#A65F73] hover:bg-[#8F4C5F] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs">
                  <span>Download Clean Printable PDF</span>
                </button>
              ` : `
                <div class="flex items-center justify-between mb-3">
                  <div>
                    <span class="text-xs font-semibold text-[#49343B] block">Premium PDF Pattern</span>
                    <span class="text-[11px] text-[#735760]">High-res charts, full photo tutorial, ad-free</span>
                  </div>
                  <span class="font-serif text-2xl font-bold text-[#A65F73] tabular-nums">$${p.price.toFixed(2)}</span>
                </div>
                <button onclick="addToCart('${p.id}')" class="w-full py-3 px-6 rounded-full text-xs font-semibold text-white bg-[#A65F73] hover:bg-[#8F4C5F] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs">
                  <span>Add to Bag / Buy Instant PDF</span>
                </button>
              `}
            </div>

            <!-- Digital Row Counter Widget -->
            <div class="bg-[#EDE7DF]/40 rounded-2xl p-4 border border-[#DCE5D8] flex items-center justify-between">
              <div>
                <span class="text-xs font-semibold text-[#49343B] block">Crochet Row Counter</span>
                <span class="text-[10px] text-[#735760]">Track your active round on screen</span>
              </div>
              <div class="flex items-center gap-2">
                <button onclick="state.activeRow = Math.max(1, state.activeRow - 1); document.getElementById('row-counter-val').textContent = 'Row ' + state.activeRow;" class="w-7 h-7 rounded-full bg-white border border-[#DCE5D8] flex items-center justify-center text-[#735760] hover:text-[#A65F73] cursor-pointer">-</button>
                <span id="row-counter-val" class="w-14 text-center font-mono font-bold text-sm text-[#A65F73] bg-white px-2 py-1 rounded-lg border border-[#DCE5D8]">Row ${state.activeRow}</span>
                <button onclick="state.activeRow++; document.getElementById('row-counter-val').textContent = 'Row ' + state.activeRow;" class="w-7 h-7 rounded-full bg-white border border-[#DCE5D8] flex items-center justify-center text-[#735760] hover:text-[#A65F73] cursor-pointer">+</button>
                <button onclick="state.activeRow = 1; document.getElementById('row-counter-val').textContent = 'Row 1';" title="Reset" class="p-1 text-[#735760]/60 hover:text-[#A65F73] ml-1">↺</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Materials Interactive Checklist -->
      <div class="mb-14">
        <div class="bg-white rounded-3xl p-6 sm:p-8 border border-[#EDE7DF] shadow-xs">
          <h2 class="font-serif text-2xl font-semibold text-[#49343B] mb-2">Materials & Required Notions</h2>
          <p class="text-xs text-[#735760] mb-6">Check off materials as you gather them from your yarn stash:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            ${p.materials.map((m, idx) => `
              <label class="flex items-start gap-3 p-3 rounded-2xl border border-[#EDE7DF] hover:bg-[#FFF9F7] text-xs text-[#49343B] cursor-pointer">
                <input type="checkbox" onchange="this.parentElement.classList.toggle('line-through', this.checked); this.parentElement.classList.toggle('text-[#735760]', this.checked);" class="mt-0.5 rounded text-[#A65F73] focus:ring-[#A65F73]" />
                <span>${m}</span>
              </label>
            `).join('')}
          </div>
          <div class="p-4 rounded-2xl bg-[#EDE7DF]/50 border border-[#DCE5D8] text-xs text-[#735760]">
            <strong class="text-[#49343B]">Recommended Yarn:</strong> ${p.yarnRecommendation}
          </div>
        </div>
      </div>

      <!-- Abbreviations -->
      <div class="mb-14">
        <div class="bg-white rounded-3xl p-6 sm:p-8 border border-[#EDE7DF] shadow-xs">
          <h2 class="font-serif text-2xl font-semibold text-[#49343B] mb-2">Stitches & Abbreviations (US Terminology)</h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-6">
            ${p.abbreviations.map(a => `
              <div class="p-3 bg-[#FFF9F7] rounded-xl border border-[#EDE7DF]">
                <span class="font-mono font-bold text-xs text-[#A65F73] block">${a.term}</span>
                <span class="text-xs text-[#49343B] mt-0.5 block">${a.meaning}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Written Steps -->
      <div class="mb-14">
        <div class="bg-white rounded-3xl p-6 sm:p-8 border border-[#EDE7DF] shadow-xs">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#EDE7DF]">
            <div>
              <h2 class="font-serif text-2xl sm:text-3xl font-semibold text-[#49343B]">Written Instructions</h2>
              <p class="text-xs text-[#735760] mt-1">Follow step by step. Use the row counter above as you progress!</p>
            </div>
            <button onclick="downloadPatternPDF('${p.id}')" class="px-4 py-2 rounded-full border border-[#DCE5D8] text-xs font-semibold text-[#49343B] hover:bg-[#EDE7DF] cursor-pointer">
              Print-Friendly Version
            </button>
          </div>
          <div class="space-y-6">
            ${p.steps.map(s => `
              <div class="p-5 rounded-2xl bg-[#FFF9F7] border border-[#EDE7DF] hover:border-[#DCE5D8]">
                <div class="flex items-center justify-between mb-2">
                  <span class="font-serif text-base font-semibold text-[#A65F73]">${s.round}</span>
                  ${s.stitchCount ? `<span class="text-[11px] font-mono bg-white px-2 py-0.5 rounded-md border border-[#EDE7DF] text-[#735760]">[${s.stitchCount}]</span>` : ''}
                </div>
                <p class="text-xs sm:text-sm text-[#49343B] leading-relaxed mb-2">${s.instructions}</p>
                ${s.tip ? `
                  <div class="mt-3 p-3 bg-[#DCE5D8]/45 rounded-xl border border-[#C8D4C3] text-xs text-[#49343B]">
                    <strong>Artisan Tip:</strong> ${s.tip}
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Related Patterns -->
      ${related.length > 0 ? `
        <div class="mt-16 pt-12 border-t border-[#EDE7DF]">
          <h3 class="font-serif text-2xl font-semibold text-[#49343B] mb-6 text-center">Related Patterns You Might Enjoy</h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            ${related.map(r => `
              <div onclick="navigateTo('pattern', '${r.id}')" class="bg-white rounded-3xl border border-[#EDE7DF] overflow-hidden shadow-2xs hover:shadow-lg hover:border-[#DCE5D8] transition-all cursor-pointer group hover:-translate-y-1">
                <div class="aspect-[4/3] bg-[#EDE7DF] overflow-hidden">
                  <img src="${r.image}" alt="${r.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div class="p-4">
                  <span class="text-[10px] font-semibold text-[#A65F73] uppercase tracking-wider block mb-1">${r.subcategory}</span>
                  <h4 class="font-serif text-base font-semibold text-[#49343B] group-hover:text-[#A65F73] truncate">${r.title}</h4>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

// VIEW: Tutorial Detail Page
function renderTutorialDetailView(tutorialId) {
  const tut = TUTORIAL_ARTICLES.find(t => t.id === tutorialId) || TUTORIAL_ARTICLES[0];
  const related = TUTORIAL_ARTICLES.filter(t => t.id !== tut.id).slice(0, 2);

  return `
    <div class="border-b border-[#EDE7DF] bg-[#FFF9F7]/90 backdrop-blur-xs py-3.5 sticky top-20 z-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onclick="navigateTo('category', 'tutorials')" class="flex items-center gap-2 text-xs font-medium text-[#735760] hover:text-[#A65F73] cursor-pointer">
          ← Back to All Tutorials
        </button>
      </div>
    </div>
    <article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
      <div class="text-center mb-8">
        <div class="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A65F73] mb-3">
          <span>${tut.subcategory}</span>
          <span class="text-[#C8D4C3]">·</span>
          <span>${tut.difficulty} Level</span>
          <span class="text-[#C8D4C3]">·</span>
          <span>${tut.readTime}</span>
        </div>
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#49343B] tracking-tight leading-tight mb-4">${tut.title}</h1>
        <p class="text-base text-[#735760] max-w-2xl mx-auto leading-relaxed">${tut.summary}</p>
      </div>
      <div class="rounded-3xl overflow-hidden bg-[#EDE7DF] border border-[#DCE5D8] shadow-lg mb-12">
        <div class="aspect-[16/10] overflow-hidden">
          <img src="${tut.image}" alt="${tut.title}" class="w-full h-full object-cover" />
        </div>
      </div>
      <div class="space-y-10 mb-16 bg-white rounded-3xl p-6 sm:p-10 border border-[#EDE7DF] shadow-xs">
        ${tut.sections.map(sec => `
          <div class="space-y-4">
            <h2 class="font-serif text-2xl font-semibold text-[#49343B] pb-2 border-b border-[#EDE7DF]">${sec.heading}</h2>
            <p class="text-sm sm:text-base text-[#49343B] leading-relaxed">${sec.content}</p>
            ${sec.keyPoints ? `
              <ul class="space-y-2 bg-[#FFF9F7] p-4 rounded-2xl border border-[#DCE5D8]">
                ${sec.keyPoints.map(kp => `<li class="flex items-start gap-2.5 text-xs sm:text-sm text-[#49343B]"><span class="w-1.5 h-1.5 rounded-full bg-[#A65F73] mt-2 shrink-0"></span>${kp}</li>`).join('')}
              </ul>
            ` : ''}
            ${sec.callout ? `
              <div class="p-4 bg-[#DCE5D8]/45 rounded-2xl border border-[#C8D4C3] text-xs sm:text-sm text-[#49343B]">
                ${sec.callout}
              </div>
            ` : ''}
          </div>
        `).join('')}
        <div class="pt-8 border-t border-[#EDE7DF] text-center">
          <h3 class="font-serif text-xl font-semibold text-[#49343B] mb-2">Ready to Practice on a Project?</h3>
          <button onclick="navigateTo('category', 'free')" class="px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#A65F73] hover:bg-[#8F4C5F] transition-all cursor-pointer shadow-xs">
            Browse Free Beginner Patterns
          </button>
        </div>
      </div>
    </article>
  `;
}

// Favorites Drawer Renderer
function renderFavoritesDrawer() {
  const container = document.getElementById('favorites-drawer-content');
  if (!container) return;
  const favItems = PATTERNS.filter(p => state.favorites.includes(p.id));

  if (favItems.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16">
        <div class="w-16 h-16 rounded-full bg-[#DCE5D8] text-[#49343B] mx-auto flex items-center justify-center mb-4 text-xl">♥</div>
        <p class="font-serif text-lg text-[#49343B] font-medium mb-1">No saved patterns yet</p>
        <p class="text-xs text-[#735760] max-w-xs mx-auto mb-6">Tap the heart on any pattern card to save it to your personal collection.</p>
        <button onclick="closeFavorites(); navigateTo('category', 'free');" class="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#A65F73] hover:bg-[#8F4C5F]">Explore Patterns</button>
      </div>
    `;
    return;
  }

  container.innerHTML = favItems.map(p => `
    <div class="flex gap-4 p-3 bg-white rounded-2xl border border-[#EDE7DF] shadow-2xs hover:border-[#DCE5D8]">
      <div onclick="closeFavorites(); navigateTo('pattern', '${p.id}');" class="w-20 h-20 rounded-xl bg-[#EDE7DF] overflow-hidden shrink-0 cursor-pointer">
        <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover" />
      </div>
      <div class="flex-1 flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-start">
            <h4 onclick="closeFavorites(); navigateTo('pattern', '${p.id}');" class="font-serif text-sm font-semibold text-[#49343B] hover:text-[#A65F73] cursor-pointer truncate">${p.title}</h4>
            <button onclick="toggleFavorite('${p.id}')" class="text-[#735760]/60 hover:text-red-500 p-1">✕</button>
          </div>
          <span class="text-[11px] text-[#A65F73] font-semibold">${p.isFree ? 'Free' : '$' + p.price.toFixed(2)}</span>
        </div>
        <button onclick="closeFavorites(); navigateTo('pattern', '${p.id}');" class="self-end px-3 py-1 bg-[#A65F73] hover:bg-[#8F4C5F] text-white text-[11px] font-medium rounded-full">View</button>
      </div>
    </div>
  `).join('');
}

// Cart Drawer Renderer
function renderCartDrawer() {
  const container = document.getElementById('cart-drawer-content');
  const footer = document.getElementById('cart-drawer-footer');
  if (!container || !footer) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16">
        <div class="w-16 h-16 rounded-full bg-[#DCE5D8] text-[#49343B] mx-auto flex items-center justify-center mb-4 text-xl">👜</div>
        <p class="font-serif text-lg text-[#49343B] font-medium mb-1">Your pattern bag is empty</p>
        <p class="text-xs text-[#735760] max-w-xs mx-auto mb-6">Explore our premium PDF patterns and downloadable tutorial editions.</p>
        <button onclick="closeCart(); navigateTo('category', 'clothing');" class="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#A65F73] hover:bg-[#8F4C5F]">Browse Patterns</button>
      </div>
    `;
    footer.innerHTML = '';
    return;
  }

  const total = state.cart.reduce((s, item) => s + (item.price || 0), 0);

  container.innerHTML = state.cart.map(p => `
    <div class="flex gap-4 p-3 bg-white rounded-2xl border border-[#EDE7DF] shadow-2xs hover:border-[#DCE5D8]">
      <div class="w-16 h-16 rounded-xl bg-[#EDE7DF] overflow-hidden shrink-0">
        <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover" />
      </div>
      <div class="flex-1 flex flex-col justify-between">
        <div class="flex justify-between items-start">
          <h4 class="font-serif text-sm font-semibold text-[#49343B] truncate">${p.title}</h4>
          <button onclick="removeFromCart('${p.id}')" class="text-[#735760]/60 hover:text-red-500 p-1">✕</button>
        </div>
        <div class="flex justify-between items-center text-xs mt-2 pt-1 border-t border-[#EDE7DF]">
          <span class="text-[10px] text-[#A65F73]">Digital PDF Edition</span>
          <span class="font-serif font-semibold text-[#49343B]">$${p.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  `).join('');

  footer.innerHTML = `
    <div class="p-6 border-t border-[#EDE7DF] bg-[#FFF9F7] space-y-4">
      <div class="flex justify-between text-sm font-semibold text-[#49343B]">
        <span>Total for Instant Download</span>
        <span class="font-serif text-lg text-[#A65F73]">$${total.toFixed(2)}</span>
      </div>
      <button onclick="state.cart.forEach(p => downloadPatternPDF(p.id)); state.cart = []; updateBadges(); renderCartDrawer(); showToast('Order completed! PDFs downloading...');" class="w-full py-3.5 px-6 rounded-full font-semibold text-xs text-white bg-[#A65F73] hover:bg-[#8F4C5F] shadow-md flex items-center justify-center gap-2 cursor-pointer">
        Complete & Download PDFs Now
      </button>
    </div>
  `;
}

// Search Modal Renderer
function handleSearchInput(q) {
  const container = document.getElementById('search-results');
  if (!container) return;
  if (!q.trim()) {
    container.innerHTML = `
      <div class="py-6">
        <span class="text-xs font-semibold uppercase tracking-wider text-[#735760] block mb-3">Suggested Searches</span>
        <div class="flex flex-wrap gap-2">
          ${['Baby Blanket', 'Teddy Bear', 'Lace Snowflake', 'Cable Cardigan', 'Slip Knot Basics', 'Rose Petal Stitch', 'Free Amigurumi'].map(term => `
            <button onclick="document.getElementById('search-input').value = '${term}'; handleSearchInput('${term}');" class="px-3.5 py-1.5 bg-white border border-[#DCE5D8] rounded-full text-xs text-[#49343B] hover:bg-[#DCE5D8] cursor-pointer">
              ${term}
            </button>
          `).join('')}
        </div>
      </div>
    `;
    return;
  }

  const matched = PATTERNS.filter(p => p.title.toLowerCase().includes(q.toLowerCase()) || p.description.toLowerCase().includes(q.toLowerCase()) || p.subcategory.toLowerCase().includes(q.toLowerCase()));
  if (matched.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12">
        <p class="font-serif text-lg text-[#49343B] mb-1">No results found for "${q}"</p>
        <p class="text-xs text-[#735760]">Try searching for "baby", "bear", or "stitches".</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="space-y-2.5">
      ${matched.map(p => `
        <div onclick="closeSearch(); navigateTo('pattern', '${p.id}');" class="flex items-center gap-3 p-2.5 rounded-2xl bg-white border border-[#EDE7DF] hover:border-[#DCE5D8] transition-all cursor-pointer group">
          <div class="w-14 h-14 rounded-xl bg-[#EDE7DF] overflow-hidden shrink-0">
            <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover" />
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-1.5 text-[10px] text-[#735760]">
              <span class="uppercase">${p.subcategory}</span>
              <span>·</span>
              <span class="text-[#A65F73] font-semibold">${p.isFree ? 'Free' : '$' + p.price.toFixed(2)}</span>
            </div>
            <h4 class="font-serif text-sm font-semibold text-[#49343B] group-hover:text-[#A65F73] truncate">${p.title}</h4>
          </div>
          <span class="text-xs text-[#A65F73] mr-2">→</span>
        </div>
      `).join('')}
    </div>
  `;
}

// Master Render Function
function render() {
  const root = document.getElementById('app-main');
  if (!root) return;

  if (state.view.type === 'home') {
    root.innerHTML = renderHomeView();
  } else if (state.view.type === 'category') {
    root.innerHTML = renderCategoryView(state.view.id);
  } else if (state.view.type === 'pattern') {
    root.innerHTML = renderPatternDetailView(state.view.id);
  } else if (state.view.type === 'tutorial') {
    root.innerHTML = renderTutorialDetailView(state.view.id);
  }

  // Update navigation active states
  document.querySelectorAll('[data-nav-link]').forEach(el => {
    const linkType = el.getAttribute('data-nav-type');
    const linkId = el.getAttribute('data-nav-id');
    const isActive = (state.view.type === 'home' && linkType === 'home') ||
                     (state.view.type === 'category' && linkType === 'category' && state.view.id === linkId);
    if (isActive) {
      el.classList.add('text-[#A65F73]', 'font-semibold');
      el.classList.remove('text-[#735760]');
    } else {
      el.classList.remove('text-[#A65F73]', 'font-semibold');
      el.classList.add('text-[#735760]');
    }
  });

  updateBadges();
}

// Global Initialization
window.addEventListener('DOMContentLoaded', () => {
  render();

  // Search input listener
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => handleSearchInput(e.target.value));
  }

  // Keyboard shortcut listener (ESC to close modals)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSearch();
      closeFavorites();
      closeCart();
    }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearch();
    }
  });
});
