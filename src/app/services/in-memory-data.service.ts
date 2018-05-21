import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const products = [{'id': 1, 'name': 'Sub-Ex', 'description': 'Fluoroscopy of Lower Extremity using Other Contrast'}, {
      'id': 2,
      'name': 'Treeflex',
      'description': 'Supplement L Ext Jugular Vein w Autol Sub, Perc Endo'
    }, {'id': 3, 'name': 'Aerified', 'description': 'Drain of R Finger Phalanx Jt with Drain Dev, Open Approach'}, {
      'id': 4,
      'name': 'Duobam',
      'description': 'Insertion of Infusion Dev into Low Back, Perc Endo Approach'
    }, {'id': 5, 'name': 'Zontrax', 'description': 'Transfer Back Subcutaneous Tissue and Fascia, Open Approach'}, {
      'id': 6,
      'name': 'Konklab',
      'description': 'CT Scan of L Up Arm using Oth Contrast'
    }, {'id': 7, 'name': 'Alpha', 'description': 'Removal of Oth Dev from Male Perineum, Perc Endo Approach'}, {
      'id': 8,
      'name': 'Kanlam',
      'description': 'Drainage of Scrotum with Drainage Device, Perc Approach'
    }, {'id': 9, 'name': 'Temp', 'description': 'Insertion of Infusion Device into Kidney, Endo'}, {
      'id': 10,
      'name': 'Regrant',
      'description': 'Supplement R Metacarpocarp Jt with Nonaut Sub, Perc Approach'
    }, {'id': 11, 'name': 'Lotlux', 'description': 'Replace Buttock Skin w Autol Sub, Full Thick, Extern'}, {
      'id': 12,
      'name': 'Vagram',
      'description': 'Restriction of Colic Vein with Intralum Dev, Open Approach'
    }, {'id': 13, 'name': 'Span', 'description': 'Bypass R Popl Art to Low Ex Art w Synth Sub, Open'}, {
      'id': 14,
      'name': 'Namfix',
      'description': 'Remove Infusion Dev from Vagina & Cul-de-sac, Perc'
    }, {'id': 15, 'name': 'Otcom', 'description': 'Beam Radiation of Ureter using Neutron Capture'}, {
      'id': 16,
      'name': 'Sonsing',
      'description': 'Replace L Ext Iliac Art w Autol Sub, Perc Endo'
    }, {'id': 17, 'name': 'Bitwolf', 'description': 'Occlusion of Jejunum, Percutaneous Endoscopic Approach'}, {
      'id': 18,
      'name': 'Flexidy',
      'description': 'Excision of Lumbar Spinal Cord, Percutaneous Approach'
    }, {'id': 19, 'name': 'Lotlux', 'description': 'Excision of Right Atrium, Percutaneous Approach'}, {
      'id': 20,
      'name': 'Job',
      'description': 'Extirpation of Matter from L Hip Bursa/Lig, Open Approach'
    }, {'id': 21, 'name': 'Kanlam', 'description': 'Revision of Nonaut Sub in L Radius, Extern Approach'}, {
      'id': 22,
      'name': 'Veribet',
      'description': 'Fluoroscopy of Superior Vena Cava'
    }, {'id': 23, 'name': 'Treeflex', 'description': 'Drainage of Pelvis Lymphatic, Open Approach'}, {
      'id': 24,
      'name': 'Fintone',
      'description': 'CT Scan of Renal Art Transplant using Oth Contrast'
    }, {'id': 25, 'name': 'Wrapsafe', 'description': 'Caregiver Training in Bed Mobility using Assist Equipment'}, {
      'id': 26,
      'name': 'Cookley',
      'description': 'Extirpate matter from L Com Carotid, Bifurc, Perc'
    }, {'id': 27, 'name': 'Solarbreeze', 'description': 'Transfer Left Upper Arm Muscle with Subcu, Open Approach'}, {
      'id': 28,
      'name': 'Stronghold',
      'description': 'Ultrasonography of Right Jugular Veins, Guidance'
    }, {'id': 29, 'name': 'Viva', 'description': 'Removal of Synth Sub from L Rib, Perc Endo Approach'}, {
      'id': 30,
      'name': 'Vagram',
      'description': 'Bypass Ileum to Ileum with Synthetic Substitute, Endo'
    }, {'id': 31, 'name': 'Home Ing', 'description': 'Osteopathic Treatment of Abdomen using Indirect Forces'}, {
      'id': 32,
      'name': 'Vagram',
      'description': 'Beam Radiation of Mouth using Heavy Particles (Protons,Ions)'
    }, {'id': 33, 'name': 'Temp', 'description': 'Drainage of Vulva, Open Approach'}, {
      'id': 34,
      'name': 'Aerified',
      'description': 'Bypass R Hypogast Vein to Low Vein, Perc Endo Approach'
    }, {'id': 35, 'name': 'Gembucket', 'description': 'Reposition L Finger Phalanx Jt with Ext Fix, Perc Approach'}, {
      'id': 36,
      'name': 'Stim',
      'description': 'Coord/Dexterity Trmt Integu Body w Assist Equip'
    }, {'id': 37, 'name': 'Quo Lux', 'description': 'Excision of Right Upper Leg, Open Approach, Diagnostic'}, {
      'id': 38,
      'name': 'Transcof',
      'description': 'Bypass 3 Cor Art from Abd Art with Autol Vn, Open Approach'
    }, {'id': 39, 'name': 'Bytecard', 'description': 'Removal of Intraluminal Device from Up Vein, Extern Approach'}, {
      'id': 40,
      'name': 'Flowdesk',
      'description': 'Drainage of Left Metacarpal with Drain Dev, Perc Approach'
    }, {'id': 41, 'name': 'Bitwolf', 'description': 'Restrict L Pulm Vein w Intralum Dev, Perc Endo'}, {
      'id': 42,
      'name': 'Asoka',
      'description': 'Drainage of R Metacarpophal Jt with Drain Dev, Perc Approach'
    }, {'id': 43, 'name': 'Subin', 'description': 'Removal of Infusion Device from Low Art, Perc Endo Approach'}, {
      'id': 44,
      'name': 'Zoolab',
      'description': 'Restriction of L Face Vein with Extralum Dev, Perc Approach'
    }, {'id': 45, 'name': 'Biodex', 'description': 'Bypass L Axilla Art to L Extracran Art w Autol Art, Open'}, {
      'id': 46,
      'name': 'Tresom',
      'description': 'Drainage of Left Scapula, Percutaneous Approach'
    }, {'id': 47, 'name': 'Bitwolf', 'description': 'Restriction of Bladder with Intraluminal Device, Via Opening'}, {
      'id': 48,
      'name': 'Namfix',
      'description': 'Bypass L Vas Deferens to R Vas Def w Synth Sub, Perc Endo'
    }, {'id': 49, 'name': 'Y-find', 'description': 'Replacement of L Pulm Art with Autol Sub, Open Approach'}, {
      'id': 50,
      'name': 'Matsoft',
      'description': 'Extirpation of Matter from Stomach, Endo'
    }, {'id': 51, 'name': 'Zamit', 'description': 'Bypass L Ureter to R Ureter with Nonaut Sub, Open Approach'}, {
      'id': 52,
      'name': 'Asoka',
      'description': 'Dilation of R Thyroid Art with 2 Drug-elut, Open Approach'
    }, {'id': 53, 'name': 'Cookley', 'description': 'Repair Left Upper Leg Tendon, Open Approach'}, {
      'id': 54,
      'name': 'Vagram',
      'description': 'Replacement of R Humeral Head with Nonaut Sub, Open Approach'
    }, {'id': 55, 'name': 'Quo Lux', 'description': 'Removal of Radioact Elem from L Low Extrem, Perc Approach'}, {
      'id': 56,
      'name': 'Mat Lam Tam',
      'description': 'Drainage of Left Elbow Bursa and Ligament, Perc Approach'
    }, {'id': 57, 'name': 'Zoolab', 'description': 'Destruction of L Low Arm & Wrist Tendon, Perc Approach'}, {
      'id': 58,
      'name': 'Zathin',
      'description': 'Introduction of Monoclonal Antibody into Ear, Via Opening'
    }, {'id': 59, 'name': 'Sub-Ex', 'description': 'Drainage of Left Ethmoid Bone, Perc Endo Approach, Diagn'}, {
      'id': 60,
      'name': 'Mat Lam Tam',
      'description': 'Bypass Pulm Trunk from Carotid with No Dev, Open Approach'
    }, {'id': 61, 'name': 'Biodex', 'description': 'Release Pharynx, Percutaneous Approach'}, {
      'id': 62,
      'name': 'Rank',
      'description': 'Insert of Infusion Dev into Sacrococcygeal Jt, Perc Approach'
    }, {'id': 63, 'name': 'Regrant', 'description': 'Division of Median Nerve, Percutaneous Approach'}, {
      'id': 64,
      'name': 'Andalax',
      'description': 'Revision of Nonaut Sub in L Glenoid Cav, Perc Approach'
    }, {'id': 65, 'name': 'Andalax', 'description': 'Restriction of R Brach Art with Intralum Dev, Open Approach'}, {
      'id': 66,
      'name': 'Greenlam',
      'description': 'Dilate R Com Iliac Art, Bifurc, w 2 Drug-elut, Perc Endo'
    }, {'id': 67, 'name': 'Tampflex', 'description': 'Excision of Head Muscle, Open Approach, Diagnostic'}, {
      'id': 68,
      'name': 'Keylex',
      'description': 'Occlusion of Small Intest with Extralum Dev, Perc Approach'
    }, {'id': 69, 'name': 'Y-find', 'description': 'Drainage of Right Lower Extremity, Perc Endo Approach'}, {
      'id': 70,
      'name': 'Overhold',
      'description': 'Beam Radiation of Inguinal Lymphatics using Heavy Particles'
    }, {'id': 71, 'name': 'Cardguard', 'description': 'Removal of Ext Fix from R Toe Phalanx Jt, Extern Approach'}, {
      'id': 72,
      'name': 'Toughjoyfax',
      'description': 'Bypass R Ureter to Ileum with Autol Sub, Perc Endo Approach'
    }, {'id': 73, 'name': 'Alpha', 'description': 'Destruction of Right Sacroiliac Joint, Open Approach'}, {
      'id': 74,
      'name': 'Otcom',
      'description': 'Excision of Left Metatarsal, Open Approach, Diagnostic'
    }, {'id': 75, 'name': 'Namfix', 'description': 'Drainage of Penis, External Approach'}, {
      'id': 76,
      'name': 'Prodder',
      'description': 'Drainage of Left Hepatic Duct, Perc Endo Approach, Diagn'
    }, {'id': 77, 'name': 'Daltfresh', 'description': 'Release Right Hand Vein, Open Approach'}, {
      'id': 78,
      'name': 'Sonair',
      'description': 'Release Right Metatarsal-Tarsal Joint, Percutaneous Approach'
    }, {'id': 79, 'name': 'Bitchip', 'description': 'Bypass L Foot Vein to Low Vein w Autol Sub, Perc Endo'}, {
      'id': 80,
      'name': 'Stim',
      'description': 'Extirpation of Matter from R Hip Bursa/Lig, Perc Approach'
    }, {'id': 81, 'name': 'Ventosanzap', 'description': 'Repair Left Ring Finger, Open Approach'}, {
      'id': 82,
      'name': 'Otcom',
      'description': 'Drainage of Tibial Nerve, Percutaneous Approach'
    }, {'id': 83, 'name': 'Gembucket', 'description': 'Release Left Thyroid Artery, Percutaneous Approach'}, {
      'id': 84,
      'name': 'Domainer',
      'description': 'Replace of L Com Carotid with Synth Sub, Perc Endo Approach'
    }, {'id': 85, 'name': 'Holdlamis', 'description': 'Replacement of Left Cornea with Nonaut Sub, Perc Approach'}, {
      'id': 86,
      'name': 'Sonair',
      'description': 'Drainage of Hypoglossal Nerve, Perc Endo Approach'
    }, {'id': 87, 'name': 'Home Ing', 'description': 'Reposition Right Ovary, Percutaneous Endoscopic Approach'}, {
      'id': 88,
      'name': 'Latlux',
      'description': 'Excision of Left Abdomen Muscle, Open Approach, Diagnostic'
    }, {'id': 89, 'name': 'Sonsing', 'description': 'Ultrasonography of Right and Left Heart, Intravascular'}, {
      'id': 90,
      'name': 'Zaam-Dox',
      'description': 'Extraction of R Low Extrem Bursa/Lig, Perc Approach'
    }, {'id': 91, 'name': 'Bitwolf', 'description': 'Monitor Peripheral Nervous Conductivity, Sensory, Perc'}, {
      'id': 92,
      'name': 'Stronghold',
      'description': 'Removal of Drainage Device from R Elbow Jt, Open Approach'
    }, {'id': 93, 'name': 'Sonair', 'description': 'Dilate R Basilic Vein w Intralum Dev, Perc Endo'}, {
      'id': 94,
      'name': 'Bitwolf',
      'description': 'Dilate 1 Cor Art, Bifurc, w Drug-elut Intra, Perc Endo'
    }, {'id': 95, 'name': 'Namfix', 'description': 'Insert Tissue Expander in L Low Leg Subcu/Fascia, Perc'}, {
      'id': 96,
      'name': 'Subin',
      'description': 'Removal of Int Fix from T-lum Jt, Extern Approach'
    }, {'id': 97, 'name': 'Stringtough', 'description': 'Reposition Right Radius, External Approach'}, {
      'id': 98,
      'name': 'Hatity',
      'description': 'Resection of Liver, Open Approach'
    }];

    const users = [{
      'id': 1,
      'first_name': 'Elnora',
      'last_name': 'Bull',
      'email': 'ebull0@google.com.br',
      'password': 'S4uzEshKaMk',
      'username': 'ebull0',
      'tasks': 10,
      'alert': false
    },
      {
        'id': 2,
        'first_name': 'Dedie',
        'last_name': 'Bysshe',
        'email': 'dbysshe1@si.edu',
        'password': 's26iJ22',
        'username': 'dbysshe1',
        'tasks': 8,
        'alert': false
      },
      {
        'id': 3,
        'first_name': 'Boony',
        'last_name': 'Arstall',
        'email': 'barstall2@narod.ru',
        'password': 'MBHUQu7',
        'username': 'barstall2',
        'tasks': 77,
        'alert': true
      },
      {
        'id': 4,
        'first_name': 'Bartolomeo',
        'last_name': 'McCallum',
        'email': 'bmccallum3@tripod.com',
        'password': 'rArpfId8q',
        'username': 'bmccallum3',
        'tasks': 44,
        'alert': false
      },
      {
        'id': 5,
        'first_name': 'Rock',
        'last_name': 'Denial',
        'email': 'rdenial4@blogtalkradio.com',
        'password': 'Bml2Ccy',
        'username': 'rdenial4',
        'tasks': 46,
        'alert': true
      },
      {
        'id': 6,
        'first_name': 'Loleta',
        'last_name': 'Shrubb',
        'email': 'lshrubb5@go.com',
        'password': 'LNAPDmNU2Ys',
        'username': 'lshrubb5',
        'tasks': 82,
        'alert': true
      },
      {
        'id': 7,
        'first_name': 'Spike',
        'last_name': 'Najera',
        'email': 'snajera6@comcast.net',
        'password': 'LVsMp0WL5w',
        'username': 'snajera6',
        'tasks': 71,
        'alert': true
      },
      {
        'id': 8,
        'first_name': 'Lesly',
        'last_name': 'Goodright',
        'email': 'lgoodright7@themeforest.net',
        'password': '2jepgTpY',
        'username': 'lgoodright7',
        'tasks': 37,
        'alert': false
      },
      {
        'id': 9,
        'first_name': 'Franni',
        'last_name': 'Faivre',
        'email': 'ffaivre8@home.pl',
        'password': 'j78ZN1tUHGnK',
        'username': 'ffaivre8',
        'tasks': 40,
        'alert': false
      },
      {
        'id': 10,
        'first_name': 'Keriann',
        'last_name': 'Minton',
        'email': 'kminton9@ox.ac.uk',
        'password': 'PAnd8M',
        'username': 'kminton9',
        'tasks': 91,
        'alert': true
      },
      {
        'id': 11,
        'first_name': 'Randi',
        'last_name': 'Hourigan',
        'email': 'rhourigana@nifty.com',
        'password': 'ccdd2kwx',
        'username': 'rhourigana',
        'tasks': 9,
        'alert': false
      },
      {
        'id': 12,
        'first_name': 'Jordan',
        'last_name': 'Sawday',
        'email': 'jsawdayb@mail.ru',
        'password': '3S5Y0meYqln',
        'username': 'jsawdayb',
        'tasks': 88,
        'alert': true
      },
      {
        'id': 13,
        'first_name': 'Brier',
        'last_name': 'Ashfield',
        'email': 'bashfieldc@eventbrite.com',
        'password': 'kOVvw9rVFy',
        'username': 'bashfieldc',
        'tasks': 53,
        'alert': true
      },
      {
        'id': 14,
        'first_name': 'Ryley',
        'last_name': 'Clowney',
        'email': 'rclowneyd@icio.us',
        'password': '81MIuR0',
        'username': 'rclowneyd',
        'tasks': 24,
        'alert': false
      },
      {
        'id': 15,
        'first_name': 'Andrus',
        'last_name': 'Melville',
        'email': 'amelvillee@a8.net',
        'password': 'MOIvkwvRNN',
        'username': 'amelvillee',
        'tasks': 44,
        'alert': true
      },
      {
        'id': 16,
        'first_name': 'Lorem',
        'last_name': 'Ipsum',
        'email': 'asdf@asdf.com',
        'password': 'asdfasdf',
        'username': 'hello',
        'tasks': 90,
        'alert': false
      }];

    return {
      products,
      users
    };
  }

}
