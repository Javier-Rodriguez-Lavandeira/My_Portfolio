// Consolidated project data, flagship metadata, and flag-based filtering helpers

const FILTER_FLAGS = [
  'VR',
  'AR',
  'Unity',
  'AI',
  'Multiplayer',
  'Web',
  'Hardware',
  '3D & Graphics',
  'Hackathon / Jam',
  'Team',
  'Solo'
];

const PROJECTS_DATA = [
  {
    number: "001",
    title: "Bachelor's Thesis: Virtual Keyboard Using EMG Sensors",
    shortDesc: "A virtual keyboard controlled through finger movements detected with EMG sensors and classified using machine learning.",
    longDesc: "A virtual keyboard system that uses electromyographic signals to detect finger movements and translate them into keyboard input.",
    details: [
      "This project explored an alternative input method for human-computer interaction using electromyography (EMG). The goal was to create a virtual keyboard controlled through subtle finger movements, reducing the need for conventional physical input devices.",
      "EMG signals were collected from sensors connected to an ESP32 and processed in Python. Finger movements were classified using a Support Vector Machine (SVM), with the resulting classifications mapped to corresponding virtual keyboard keys. A calibration interface was also developed to make the system adaptable to the user.",
      "I designed and implemented the software pipeline, including signal acquisition, processing, classification and interaction. The project required working across embedded hardware, machine learning and software development, giving me experience integrating physical sensors with an interactive application."
    ],
    image: "img/project-001/Ventana_Calibracion.png",
    videoId: "",
    images: [
      "img/project-001/Ventana_Calibracion.png",
      "img/project-001/BacThesis.png",
      "img/project-001/ESP32.jpeg",
      "img/project-001/electronica.png",
      "img/project-001/colocacionElectrodos.png",
      "img/project-001/Segmentacion.png",
      "img/project-001/Resultados.png"
    ],
    tags: ["Electronics", "Programming", "Python"],
    flags: ["Hardware", "Solo"],
    flagship: true,
    flagshipOrder: 4,
    coverImage: "img/project-001/ESP32.jpeg",
    hoverImage: "img/project-001/Ventana_Calibracion.png",
    links: [
      { text: "Paper", href: "https://www.linkedin.com/posts/javier-rodr%C3%ADguez-lavandeira-890284333_implementation-of-a-virtual-keybord-using-activity-7271819356676800512-JvgC/" }
    ]
  },
  {
    number: "002",
    title: "The Garage VR",
    shortDesc: "A VR climbing experience where drawing becomes part of the physical environment and gameplay.",
    longDesc: "A Virtual Reality climbing puzzle game that combines drawing and physical movement, requiring players to create their own climbing holds and use limited resources wisely to reach the top.",
    details: [
      "The Garage VR combines climbing with drawing to create a resource-management puzzle. Players use a virtual painting tablet to draw their own climbing holds directly onto the environment, which are then transformed into physical objects that can be climbed.",
      "Ink is limited, so players must decide where to spend their resources and how much to draw. Larger holds are easier to grab but consume more ink, while smaller holds require greater precision and more careful route planning. The challenge comes from finding an efficient path to the top rather than simply creating as many holds as possible.",
      "I developed the VR climbing and interaction systems in Unity, combining physical climbing, drawing-based object creation, resource management and stamina mechanics. The project explores how VR can turn drawing into a physical gameplay mechanic where planning and decision-making directly shape the environment."
    ],
    image: "",
    videoId: "QcV9Jcn7vQY",
    images: [
      "img/project-002/3.png",
      "img/project-002/4.png",
      "img/project-002/1.png",
      "img/project-002/2.png"
    ],
    tags: ["VR", "Unity"],
    flags: ["VR", "Unity", "Solo"],
    flagship: true,
    flagshipOrder: 2,
    coverImage: "img/project-002/4.png",
    hoverImage: "img/project-002/3.png",
    links: [
      { text: "↗ Itch.io", href: "https://javirola.itch.io/the-garage-vr-climbing-experience" }
    ]
  },
  {
    number: "003",
    title: "Dream Lens",
    shortDesc: "An award-winning AI-powered VR documentary experience exploring the boundary between observation and imagination.",
    longDesc: "An AI-powered VR documentary experience where players use two cameras to record the world from realistic and imaginative perspectives.",
    details: [
      "Dream Lens is an experimental VR documentary experience created during the Cambridge AIxXR hackathon. The project explores how AI and immersive media can change the way people document and interpret the world around them.",
      "Using hand tracking, players interact naturally with two virtual cameras. The Real Camera captures the environment as it is, while the Dream Camera transforms the same space into a more imaginative and atmospheric interpretation. Players explore two environments, a warm savannah and a snowy landscape, selecting objects and turning their observations into a visual narrative.",
      "I worked as part of a five-person team on the Unity VR implementation and interaction systems. The project challenged us to combine AI-driven ideas with intuitive spatial interaction within a very limited development time. It was also selected as the host's favourite project at the Cambridge AIxXR hackathon, reinforcing the value of combining a clear concept with technically engaging XR interactions."
    ],
    image: "",
    videoId: "3MpFx-T6m8s",
    images: [
      "img/project-003/Savannah.png",
      "img/project-003/RealCam.png",
      "img/project-003/DreamCam.png"
    ],
    tags: ["VR", "AI", "Unity", "Group Project(5)"],
    flags: ["VR", "Unity", "AI", "Team", "Hackathon / Jam"],
    flagship: true,
    flagshipOrder: 3,
    coverImage: "img/project-003/Savannah.png",
    hoverImage: "img/project-003/DreamCam.png",
    links: [
      { text: "↗ Itch.io", href: "https://numi1217.itch.io/dream-lens" }
    ]
  },
  {
    number: "004",
    title: "Face for Face",
    shortDesc: "A puzzle game about swapping bodies with masked mannequins, developed in under 48 hours.",
    longDesc: "A fast-paced game development project created for the Goldsmiths Global Game Jam, built around body-swapping puzzle mechanics.",
    details: [
      "Face for Face is a puzzle game developed during the Goldsmiths Global Game Jam. The central idea is based around swapping the player's body with masked mannequins, turning the character itself into a gameplay mechanic.",
      "Players use the body-swapping mechanic to navigate the environment and solve puzzles. Different bodies provide access to different areas or interactions, requiring the player to understand how the characters and environment can be combined to progress.",
      "I worked as part of a two-person team during the 48-hour development period. The biggest challenge was deciding what to prioritise under severe time constraints while still delivering a coherent playable experience. The project strengthened my ability to prototype mechanics quickly and make technical decisions based on gameplay value rather than implementation perfection."
    ],
    image: "",
    videoId: "LZFVdrko4mw",
    images: [
      "img/project-004/FFF1.png",
      "img/project-004/FFF2.png",
      "img/project-004/FFF3.png",
      "img/project-004/FFF4.png",
      "img/project-004/FFF5.png",
      "img/project-004/FFF6.png"
    ],
    tags: ["Unity", "Under 48h", "Group Project(2)"],
    flags: ["Unity", "Team", "Hackathon / Jam"],
    links: [
      { text: "↗ Itch.io", href: "https://henryalbert.itch.io/face-for-face" }
    ]
  },
  {
    number: "005",
    title: "Fencing VR",
    shortDesc: "A VR fencing training simulation designed around technique and reaction time.",
    longDesc: "A virtual reality fencing training simulation. Players engage in training fencing scenarios to improve their technique, reaction time, and strategy.",
    details: [
      "Fencing VR is a Virtual Reality training simulation designed to explore how immersive environments can support sports training. The project places the player in a virtual fencing environment where they can practise techniques against simulated targets.",
      "The experience focuses on spatial interaction and timing, requiring players to react to attacks and use appropriate fencing movements. VR controllers provide direct interaction with the weapon, allowing the training scenarios to be built around physical movement rather than traditional game controls.",
      "I worked as part of a four-person team to develop the Unity VR experience. The project gave me experience designing interactions around a physical activity and highlighted the challenges of translating real-world movements and expectations into a virtual environment."
    ],
    image: "",
    videoId: "eYne4meaOyw",
    images: [
      "img/project-005/Title.png",
      "img/project-005/fencing2.jpg",
      "img/project-005/fencing3.png",
      "img/project-005/fencing4.png"
    ],
    tags: ["Unity", "VR", "Group Project(4)"],
    flags: ["VR", "Unity", "Team"],
    links: [
      { text: "↗ Itch.io", href: "https://javirola.itch.io/vr-fencing" }
    ]
  },
  {
    number: "006",
    title: "SplitDrive",
    shortDesc: "A two-player driving game controlled through a custom physical controller.",
    longDesc: "A two-player driving game where each player controls one side of the vehicle through a custom-built physical controller.",
    details: [
      "SplitDrive is a two-player driving game designed around an unusual physical interaction: instead of controlling a vehicle individually, each player is responsible for one of its wheels. The game was created to explore how a custom controller can fundamentally change the mechanics of a conventional genre.",
      "The custom controller divides steering and movement between two physical inputs, requiring both players to coordinate their actions to control the vehicle. This turns cooperation into the core mechanic rather than simply adding multiplayer to an existing driving system.",
      "I developed the Unity game as well as the custom hardware and worked on the integration between both of them. The project involved designing the controller, working with electronics and translating physical input into game behaviour. It taught me how hardware constraints can be used deliberately to create more interesting interaction mechanics."
    ],
    image: "",
    videoId: "Iq2FFzWkTBE",
    images: [
      "img/project-006/ControllerIMG2.jpeg",
      "img/project-006/Schematics.png",
      "img/project-006/SchematicsDrawn.jpeg"
    ],
    tags: ["Unity", "3D", "Custom Controller"],
    flags: ["Unity", "Hardware", "Solo"],
    links: [
      { text: "↗ GitHub", href: "https://github.com/Javier-Rodriguez-Lavandeira/SplitDrive" }
    ]
  },
  {
    number: "007",
    title: "Non-Planar Projections",
    shortDesc: "Implementation of non-planar projection techniques in Unity.",
    longDesc: "A technical Unity project investigating different approaches to rendering content onto non-planar surfaces. The project explores spherical, fisheye, and other projection techniques, demonstrating how to map textures and visuals onto curved geometries.",
    details: [
      "This project investigates how conventional planar projection techniques can be adapted to curved surfaces. The goal was to understand how spherical, cylindrical and conical projections can be implemented and visualised within a real-time 3D environment.",
      "Each projection was implemented using two approaches. The first projects content onto an intermediary 3D object, while the second performs the projection independently of an object. This allowed us to compare different mathematical and rendering approaches and observe how they behave across different geometries.",
      "I worked as part of a two-person team, implementing the projection techniques in Unity and experimenting with the underlying mathematics and shaders. The project strengthened my understanding of coordinate spaces, projection mathematics and GPU-based rendering, while also providing a foundation for working with more advanced visualisation techniques."
    ],
    image: "",
    videoId: "7DkoOHFSxGw",
    images: [
      "img/project-007/SphericalProj.png",
      "img/project-007/SphereProj2.png",
      "img/project-007/FishProj.png"
    ],
    tags: ["Unity", "3D", "Mathematics", "Shaders", "Group Project(2)"],
    flags: ["Unity", "3D & Graphics", "Team"],
    links: [
      { text: "↗ Itch.io", href: "https://henryalbert.itch.io/non-planar-projections" }
    ]
  },
  {
    number: "008",
    title: "Klym Remake",
    shortDesc: "A Unity remake of Klym, recreating its core mechanics while expanding the original experience.",
    longDesc: "A Unity-based remake of Klym with improved graphics and gameplay mechanics. The project involved recreating the original game's mechanics while adding new features and enhancements.",
    details: [
      "Klym Remake is a recreation of the Klym game developed to explore the process of analysing an existing game and rebuilding its mechanics from scratch. Rather than simply reproducing its appearance, the project focused on understanding the systems that make the original experience work.",
      "The project involved recreating the game's core gameplay loop, player interactions and environment within Unity. Additional improvements and features were introduced while keeping the original game's identity and mechanics as the reference point.",
      "I implemented the remake in Unity, working through the process of breaking an existing game into smaller systems and rebuilding them independently. This was particularly useful for improving my understanding of gameplay architecture, iteration and the relationship between mechanics and level design."
    ],
    image: "",
    videoId: "hDwkfFYiHjQ",
    images: [
      "img/project-008/Klym1.png",
      "img/project-008/Klym2.png",
      "img/project-008/Klym3.png"
    ],
    tags: ["Unity", "3D", "Remake"],
    flags: ["Unity", "3D & Graphics", "Solo"],
    links: [
      { text: "↗ Itch.io", href: "https://javirola.itch.io/klym-recreation" },
      { text: "↗ GitHub", href: "https://github.com/Javier-Rodriguez-Lavandeira/Klym-Demake" }
    ]
  },
  {
    number: "009",
    title: "L-System Visualizer",
    shortDesc: "An interactive Unity tool for generating and visualising procedural L-Systems.",
    longDesc: "An interactive visualisation tool that turns L-System rules into procedural structures in real time.",
    details: [
      "The L-System Visualizer explores procedural generation through Lindenmayer systems, a mathematical formalism commonly used to describe recursive structures such as plants and other organic forms. The project was designed as an interactive way to experiment with how simple rules can generate complex structures.",
      "Users can modify the parameters and rules used to generate an L-System and immediately observe the resulting structure. Unity is responsible for interpreting the generated sequences and converting them into a visual 3D representation.",
      "I implemented the system in Unity, focusing on the underlying rule-processing logic as well as the visualisation pipeline. The project helped me develop a stronger understanding of recursion, procedural generation and how mathematical systems can be translated into interactive visual experiences."
    ],
    image: "",
    videoId: "obj4mHR97a8",
    images: [
      "img/project-009/LS1.png",
      "img/project-009/LS2.png",
      "img/project-009/LS3.png"
    ],
    tags: ["Unity", "Mathematics"],
    flags: ["Unity", "3D & Graphics", "Solo"],
    links: [
      { text: "↗ Itch.io", href: "https://javirola.itch.io/lsystems" },
      { text: "↗ GitHub", href: "https://github.com/Javier-Rodriguez-Lavandeira/L-Systems" }
    ]
  },
  {
    number: "010",
    title: "Synthetic Wild",
    shortDesc: "A VR experience using full-body motion capture to create and record animal animations through human movement.",
    longDesc: "A VR motion-capture experience where players animate virtual animals from the zoo using their own body movements.",
    details: [
      "Synthetic Wild explores how full-body motion capture can be used as an intuitive interface for creating animation. The project places the player inside a virtual zoo where their movements can be transferred onto different animal characters.",
      "A Perception Neuron motion-capture suit and headset tracking are used to capture the player's movements. These movements are retargeted onto animal rigs in real time, while the system also allows users to record gestures and generate animation clips that can later be played back by the animals.",
      "I worked as part of a three-person team on the Unity implementation of the motion-capture and animation pipeline. The main technical challenge was translating human movement onto characters with very different proportions and skeletons. The project gave me practical experience with motion capture, animation retargeting and designing interfaces around full-body movement."
    ],
    image: "",
    videoId: "",
    images: [
      "img/project-010/SW1.png",
      "img/project-010/SW2.png",
      "img/project-010/SW3.png"
    ],
    tags: ["Unity", "3D", "Motion Capture", "VR", "Group Project(3)"],
    flags: ["VR", "Unity", "Hardware", "Team"],
    links: [
      { text: "↗ GitHub", href: "https://github.com/Javier-Rodriguez-Lavandeira/SyntheticWild" }
    ]
  },
  {
    number: "011",
    title: "TrackManiacs",
    shortDesc: "An AR Hot Wheels-inspired experience where players build, test and destroy racetracks in the real world.",
    longDesc: "An augmented reality game that turns real environments into interactive racetracks through track building, portals and physics-based destruction.",
    details: [
      "TrackManiacs is an Augmented Reality experience inspired by Hot Wheels-style track building. The project gives players the ability to construct racetracks directly within their physical environment, turning the real world into part of the game level.",
      "Players can place and connect track elements, create non-linear routes using portals and experiment with physics-based interactions.",
      "I worked as part of a four-person team on the Unity AR implementation. The project required combining spatial placement, 3D physics and mobile AR interaction while keeping the experience understandable for the player. It gave me experience designing interactions where virtual objects need to feel naturally connected to the user's physical surroundings."
    ],
    image: "",
    videoIds: ["F0eDUX-AvHI", "PrgmDvSdDU8"],
    images: [],
    tags: ["Unity", "3D", "AR", "Group Project(4)"],
    flags: ["AR", "Unity", "Team"],
    links: []
  },
  {
    number: "012",
    title: "Modeling & Animation Projects",
    shortDesc: "A collection of 3D modeling and animation projects showcasing various techniques and tools.",
    longDesc: "A portfolio of 3D modeling and animation projects that demonstrate my hability in modelling and animating 3D assets.",
    details: [
      "These projects showcase a range of 3D modeling and animations that can be used as game assets."
    ],
    image: "",
    videoIds: ["M66fq2Y4GaA", "YSWMenUrtIo"],
    images: [
      "img/project-012/PaintedGun.jpg",
      "img/project-012/FirstMatsGun.jpg",
      "img/project-012/WagonWithColor.jpg",
      "img/project-012/WagonWithColor2.jpg",
      "img/project-012/PaintedRobot.jpg",
      "img/project-012/KirbyWithColor.png",
      "img/project-012/ArmsAndLegCtrls.png"
    ],
    tags: ["3D Modeling", "Animation", "Blender", "Maya"],
    flags: ["3D & Graphics", "Solo"],
    links: []
  },
  {
    number: "014",
    title: "Web XR Lab",
    shortDesc: "An interactive platform showcasing AI-powered experiments in augmented reality, computer vision and spatial computing.",
    longDesc: "XR Lab is a personal web-based experimentation platform exploring the possibilities of AI, augmented reality and computer vision through a collection of interactive applications and prototypes.",
    details: [
      "XR Lab is a personal development platform created to explore emerging technologies across artificial intelligence, augmented reality, computer vision and spatial computing. Built as a collection of independent web experiments, the project provides a space to prototype, develop and showcase interactive applications that explore new ways of interacting with digital content through everyday devices.",
      "The platform brings together a growing collection of experiments, each focusing on a different technological concept or interaction. These include hand gesture recognition, natural hand-based object manipulation, image tracking, 3D model visualisation, facial landmark analysis and hand gesture recognition. Other experiments explore more specialised applications, such as climbing technique analysis through computer vision and biomechanical movement tracking.",
      "Developed with a modern web technology stack, XR Lab prioritises browser-based experiences that can run directly on smartphones, desktop computers and compatible virtual reality headsets, without requiring dedicated native applications. Its modular architecture allows individual experiments to be developed independently while sharing common infrastructure, creating a flexible environment for rapid prototyping and technological exploration.",
      "A central aspect of the project is its AI-assisted development workflow, using AI agents to research, design, implement and iterate on new ideas. Rather than focusing on a single application, XR Lab continuously evolves as a laboratory for experimentation, investigating how accessible AI and web technologies can transform the way people interact with their surroundings and digital environments."
    ],
    image: "",
    videoId: "",
    images: [
      "img/project-014/1.png",
      "img/project-014/2.png",
      "img/project-014/3.png"
    ],
    tags: ["AI", "Web Development", "Computer Vision", "AR", "XR", "Three.js", "React", "TypeScript", "In Development"],
    flags: ["AR", "AI", "Web", "Solo"],
    links: [
      { text: "↗ Website", href: "https://javirolaxrlab.netlify.app/" }
    ]
  },
  {
    number: "015",
    title: "CIVITAS 2042",
    shortDesc: "A multiplayer VR learning experience exploring the future of democracy, AI governance and collective responsibility through immersive role-playing and interactive decision-making.",
    longDesc: "CIVITAS 2042 is an immersive multiplayer VR experience developed during the Cambridge EduX Hackathon 2026. Set in a future society governed increasingly by artificial intelligence, the project allows players to assume different citizen identities, debate AI-generated policy proposals and experience the consequences of their collective decisions.",
    details: [
      "CIVITAS 2042 is an immersive educational VR experience developed collaboratively by a team of three during the Cambridge EduX Hackathon 2026. The project explores a central question: if artificial intelligence could predict the consequences of every decision and design the best possible society, would democracy and human decision-making still be necessary? Designed for higher education, the experience transforms discussions about AI ethics, democratic participation and responsible governance into an interactive simulation.",
      "Players enter a futuristic city and assume the identities of different citizens, each with their own background, priorities and personal environment. These include a healthcare worker advocating for better medical services, an AI company CEO promoting automated governance, a politician concerned about algorithmic bias and a student seeking affordable housing and employment. Through these different perspectives, players experience how the same political decisions can affect individuals and communities in very different ways.",
      "The core gameplay revolves around an AI Policy Maker that proposes changes to the city's policies and resource allocation. Players gather around a shared virtual council table, discuss proposals and physically interact with voting tokens to agree, disagree or negotiate. The consequences of their decisions are then reflected in the simulated city, with changes to buildings, economic indicators, headlines and citizen diaries. The experience supports up to four human players through multiplayer sessions with voice communication, while AI-controlled citizens fill unoccupied roles to ensure that sessions remain playable with smaller groups.",
      "The prototype was developed using Unity 6 and the XR Interaction Toolkit, targeting Meta Quest and Android XR headsets. Additional features include individual identity environments, interactive token-based voting, multiplayer communication, AI citizen characters and an AI Policy Maker with on-device neural text-to-speech and highlighted captions. The project follows an experiential learning approach, allowing students to live through decisions, reflect on their consequences and replay the experience from different perspectives. Future development directions include more sophisticated LLM-driven policy generation, dynamic consensus mechanisms and AI-generated citizen identities and environments."
    ],
    image: "",
    videoId: "gBVl4UO5sw4",
    images: [],
    tags: [
      "Virtual Reality",
      "XR",
      "AI",
      "Multiplayer",
      "Unity",
      "Hackathon 2026"
    ],
    flags: ["VR", "Unity", "AI", "Multiplayer", "Team", "Hackathon / Jam"],
    links: []
  },
  {
    number: "013",
    title: "RouteSetterVR",
    shortDesc: "A virtual reality climbing experience. Under Development.",
    longDesc: "RouteSetter VR is a virtual reality climbing experience developed in Unity that explores new ways of designing, customising and interacting with climbing environments.",
    details: [
      "RouteSetter VR is an immersive virtual reality climbing experience developed in Unity, exploring how VR can transform the way people interact with climbing environments. Originally conceived as a tool to help real-world route setters design and visualise climbing routes before installing them on physical walls, the project has evolved into a broader experience combining climbing simulation, creative tools and multiplayer interaction.",
      "At its core, RouteSetter VR features an interactive route-setting system that allows players to build and customise their own climbing walls. Using manual and distance-based placement methods, players can position and rotate climbing holds directly on virtual surfaces. A dedicated hold dispenser provides access to different hold shapes and volumes, alongside colour customisation tools for creating visually distinct routes. The experience also includes a persistence system that saves the gym configuration, preserving attached holds, their positions, rotations and colours across sessions.",
      "The climbing mechanics are designed around a dynamic stamina system, where energy consumption depends on several factors, including grip strength, hand positioning and hold geometry. Different hold types, such as jugs, crimps and slopers, introduce distinct challenges that encourage players to consider their technique and energy management. A guided tutorial helps introduce the experience and its mechanics, making the different systems more accessible to new players.",
      "More recently, multiplayer functionality has expanded RouteSetter VR beyond a single-player experience, allowing users to share the virtual climbing environment. The project brings together VR interaction, climbing simulation, spatial object manipulation, persistent data management and networked gameplay within a single Unity application. Through its ongoing development, RouteSetter VR explores the possibilities of virtual reality as a platform for climbing, creativity and collaborative route design."
    ],
    image: "",
    videoId: "",
    images: [
      "img/project-013/1.png",
      "img/project-013/2.png"
    ],
    tags: ["Unity", "VR", "Climbing", "Multiplayer", "In Development"],
    flags: ["VR", "Unity", "Multiplayer", "Solo"],
    flagship: true,
    flagshipOrder: 1,
    coverImage: "img/project-013/1.png",
    hoverImage: "img/project-013/2.png",
    links: [
      { text: "↗ Instagram", href: "https://www.instagram.com/routesettervr/" }
    ]
  }
];

/**
 * Returns canonical filter flags for a project.
 * Uses explicit `project.flags` when present, falling back to `project.tags` inference.
 */
function getProjectFlags(project) {
  if (!project) return [];
  if (Array.isArray(project.flags) && project.flags.length > 0) {
    return project.flags;
  }

  const tags = Array.isArray(project.tags) ? project.tags : [];
  const derived = new Set();

  tags.forEach(tag => {
    const normalized = String(tag).trim();
    if (normalized === 'VR' || normalized === 'Virtual Reality') derived.add('VR');
    if (normalized === 'AR') derived.add('AR');
    if (normalized === 'Unity') derived.add('Unity');
    if (normalized === 'AI') derived.add('AI');
    if (normalized === 'Multiplayer') derived.add('Multiplayer');
    if (['Web Development', 'Three.js', 'React', 'TypeScript'].includes(normalized)) derived.add('Web');
    if (['Electronics', 'Custom Controller', 'Motion Capture'].includes(normalized)) derived.add('Hardware');
    if (['3D', 'Shaders', '3D Modeling', 'Animation', 'Mathematics'].includes(normalized)) derived.add('3D & Graphics');
    if (normalized === 'Under 48h' || /hackathon/i.test(normalized)) derived.add('Hackathon / Jam');
    if (/group project/i.test(normalized)) derived.add('Team');
  });

  if (!derived.has('Team')) {
    derived.add('Solo');
  }

  return Array.from(derived);
}

/**
 * Filters a project list by one or more canonical flags.
 * @param {Array} projects
 * @param {Array|Set} activeFlags
 * @param {'all'|'any'} matchMode - 'all' requires every active flag; 'any' requires at least one.
 */
function filterProjects(projects, activeFlags = [], matchMode = 'all') {
  const requiredFlags = Array.from(activeFlags);
  if (requiredFlags.length === 0) {
    return [...projects];
  }

  return projects.filter(project => {
    const projectFlags = getProjectFlags(project);
    if (matchMode === 'any') {
      return requiredFlags.some(flag => projectFlags.includes(flag));
    }
    return requiredFlags.every(flag => projectFlags.includes(flag));
  });
}

/**
 * Counts how many projects match each filter flag.
 */
function getFlagCounts(projects, flags = FILTER_FLAGS) {
  const counts = {};
  flags.forEach(flag => {
    counts[flag] = 0;
  });

  projects.forEach(project => {
    const projectFlags = getProjectFlags(project);
    flags.forEach(flag => {
      if (projectFlags.includes(flag)) {
        counts[flag] += 1;
      }
    });
  });

  return counts;
}

/**
 * Resolves the primary cover image and optional hover-crossfade image for a project card.
 */
function getProjectCoverMedia(project) {
  if (!project) return { primary: '', hover: '' };

  const imgs = Array.isArray(project.images) && project.images.length
    ? project.images
    : (project.image ? [project.image] : []);
  const vids = Array.isArray(project.videoIds) && project.videoIds.length
    ? project.videoIds
    : (project.videoId ? [project.videoId] : []);

  const primary = project.coverImage
    || imgs[0]
    || (vids[0] ? `https://img.youtube.com/vi/${vids[0]}/hqdefault.jpg` : '');
  const hover = project.hoverImage
    || imgs.find(src => src !== primary)
    || '';

  return { primary, hover };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    PROJECTS_DATA,
    FILTER_FLAGS,
    getProjectFlags,
    filterProjects,
    getFlagCounts,
    getProjectCoverMedia
  };
}
