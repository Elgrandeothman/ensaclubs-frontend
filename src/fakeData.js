const clubs = [
    {
        id: 1,
        name: "ENIAC Club",
        description: "ENIAC club est un club de l'Ecole Nationale des Sciences Appliquées de SAFI qui vise à améliorer le savoir des étudiants , débutants ou professionnels , dans le domaine d'informatique et des nouvelles technologies.",
        category: "Informatique",
        image: "https://www.eniacclub.yj.lu/wp-content/uploads/2022/08/245509536_111793047946677_7555609402602487882_n-removebg-preview.png",
        club_creator: {
            name: "John Doe",
            email: "john.d@gmail.com",
            image: "A57JD6G",
        },
        active: true,
        updatedAt: "2022-08-27T12:33:37.778+00:00"
    },
    {
        id: 2,
        name: "Club Social",
        description: "ENIAC club est un club de l'Ecole Nationale des Sciences Appliquées de SAFI qui vise à améliorer le savoir des étudiants , débutants ou professionnels , dans le domaine d'informatique et des nouvelles technologies.",
        category: "Social",
        image: "https://www.ensamaroc.com/storage/images/clubs/logos/ClubSocial_logo20230125161224.png",
        club_creator: {
            name: "Jane Doe",
            email: "jane.d@gmail.com",
            image: "B15JK6A",
        },
        updatedAt: "2022-08-27T12:33:37.778+00:00"
    },
    {
        id: 3,
        name: "Club Enactus",
        description: "ENIAC club est un club de l'Ecole Nationale des Sciences Appliquées de SAFI qui vise à améliorer le savoir des étudiants , débutants ou professionnels , dans le domaine d'informatique et des nouvelles technologies.",
        category: "Entreprenariat",
        image: "https://www.ensamaroc.com/storage/images/clubs/logos/ClubEnactusENSAS_logo20230125214922.png",
        club_creator: {
            name: "Joe Ma-",
            email: "joe.m@gmail.com",
            image: "H8DO2H9",
        },
        active: false,
        updatedAt: "2022-08-27T12:33:37.778+00:00"
    },
    {
        id: 4,
        name: "Chess Club",
        description: "ENIAC club est un club de l'Ecole Nationale des Sciences Appliquées de SAFI qui vise à améliorer le savoir des étudiants , débutants ou professionnels , dans le domaine d'informatique et des nouvelles technologies.",
        category: "Sport",
        image: "https://www.ensamaroc.com/storage/images/clubs/logos/ChessClub_logo20230125214753.png",
        club_creator: {
            name: "Joe Ma-",
            email: "joe.m@gmail.com",
            image: "H8DO2H9",
        },
        active: false,
        updatedAt: "2022-08-27T12:33:37.778+00:00"
    },
    {
        id: 5,
        name: "Club Zeroday",
        description: "ENIAC club est un club de l'Ecole Nationale des Sciences Appliquées de SAFI qui vise à améliorer le savoir des étudiants , débutants ou professionnels , dans le domaine d'informatique et des nouvelles technologies.",
        category: "Informatique",
        image: "https://www.ensamaroc.com/storage/images/clubs/logos/ClubZeroday_logo20230125215130.png",
        club_creator: {
            name: "Joe Ma-",
            email: "joe.m@gmail.com",
            image: "H8DO2H9",
        },
        active: false,
        updatedAt: "2022-08-27T12:33:37.778+00:00"
    },
]
const demandes = [
    {
        id: 123,
        object: "Evénement X",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia, nunc nisl aliquam mauris, vitae ultricies nunc nisl euismod nunc. Sed euismod, nunc sit amet ultricies lacinia, nunc nisl aliquam mauris, vitae ultricies nunc nisl euismod nunc.",
        demande_creator: {
            name: "John Doe",
            email: "john.d@gmail.com",
            image: "A57JD6G",
        },
        demande_club: {
            id: 123,
            name: "ENIAC Club",
            club_creator: {
                name: "John Doe",
                email: "john.d@gmail.com",
                image: "A57JD6G",
            },
            active: true,
            updatedAt: "2022-08-27T12:33:37.778+00:00"
        },
        accepted: true,
        updatedAt: "2023-01-22T12:33:37.778+00:00"
    },
    {
        id: 123,
        object: "Demande Amphi A",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia, nunc nisl aliquam mauris, vitae ultricies nunc nisl euismod nunc. Sed euismod, nunc sit amet ultricies lacinia, nunc nisl aliquam mauris, vitae ultricies nunc nisl euismod nunc.",
        demande_creator: {
            name: "John Doe",
            email: "john.d@gmail.com",
            image: "A57JD6G",
        },
        demande_club: {
            id: 123,
            name: "ENIAC Club",
            club_creator: {
                name: "John Doe",
                email: "john.d@gmail.com",
                image: "A57JD6G",
            },
            active: true,
            updatedAt: "2022-08-27T12:33:37.778+00:00"
        },
        accepted: false,
        updatedAt: "2023-01-25T12:33:37.778+00:00"
    },
    {
        id: 123,
        object: "Demande Matériel X",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia, nunc nisl aliquam mauris, vitae ultricies nunc nisl euismod nunc. Sed euismod, nunc sit amet ultricies lacinia, nunc nisl aliquam mauris, vitae ultricies nunc nisl euismod nunc.",
        demande_creator: {
            name: "John Doe",
            email: "john.d@gmail.com",
            image: "A57JD6G",
        },
        demande_club: {
            id: 123,
            name: "ENIAC Club",
            club_creator: {
                name: "John Doe",
                email: "john.d@gmail.com",
                image: "A57JD6G",
            },
            active: true,
            updatedAt: "2022-08-27T12:33:37.778+00:00"
        },
        accepted: null,
        updatedAt: "2023-01-02T12:33:37.778+00:00"
    },
]
const events = [
    {
        id: 1,
        name: "Poblem solving competition",
        description: "ENIAC Club organized an advanced programming competition intended to support the talents of students in computer science field.",
        date: "2021-10-10",
        image: "https://www.eniacclub.yj.lu/wp-content/uploads/2022/08/262354675_129591299500185_1114327128340276160_n.jpg",
        club: {
            id: 1,
            name: "ENIAC Club",
            image: "https://www.eniacclub.yj.lu/wp-content/uploads/2022/08/245509536_111793047946677_7555609402602487882_n-removebg-preview.png"
        }
    },
    {
        id: 2,
        name: "Workshops on C-Language",
        description: "ENIAC CLUB has organized a training in the form of a workshop in C language, on Thursday February 17, with a very good certificate in C language will be dedicated to all participants.",
        date: "2021-10-10",
        image: "https://www.eniacclub.yj.lu/wp-content/uploads/2022/08/273966167_150374014088580_1710610581312681529_n-1.jpg",
        club: {
            id: 1,
            name: "ENIAC Club",
            image: "https://www.eniacclub.yj.lu/wp-content/uploads/2022/08/245509536_111793047946677_7555609402602487882_n-removebg-preview.png"
        }
    },
    {
        id: 3,
        name: "The Future Of App Industry",
        description: "The ENIAC club of ENSAS has the honor of organizing a seminar entitled « the future of App industry » which took place on Thursday May 12 in partnership with Huawei..",
        date: "2021-10-10",
        image: "https://www.eniacclub.yj.lu/wp-content/uploads/2022/08/280291502_171658228626825_3867034837504741912_n.png",
        club: {
            id: 1,
            name: "ENIAC Club",
            image: "https://www.eniacclub.yj.lu/wp-content/uploads/2022/08/245509536_111793047946677_7555609402602487882_n-removebg-preview.png"
        }
    }
]

export { clubs, demandes, events };