import ruohStore from '../assets/web/ruohstore.png';
import syriaStore from '../assets/web/syriastore.png';
import tigerCard from '../assets/web/tigercard.png';
import abdStore from '../assets/web/abd.png';
import reno1 from '../assets/apps/reno1.jpg';
import reno2 from '../assets/apps/reno2.jpg';
import reno3 from '../assets/apps/reno3.jpg';
import reno4 from '../assets/apps/reno4.jpg';
import albatool1 from '../assets/apps/albatool1.jpg';
import albatool2 from '../assets/apps/albatool2.jpg';
import albatool3 from '../assets/apps/albatool3.jpg';

export const categories = [
  { id: 'all', label: 'جميع المشاريع' },
  { id: 'websites', label: 'مواقع الويب' },
  { id: 'mobile-apps', label: 'تطبيقات أندرويد' },
];

export const projects = [
  { id: 1, name: 'Ruoh Store', description: 'متجر إلكتروني متكامل لبيع اشتراكات الألعاب والتطبيقات والخدمات الرقمية.', category: 'websites', type: 'web', image: ruohStore, link: 'https://ruoh-store.com' },
  { id: 2, name: 'Syria Store', description: 'متجر رقمي لبيع اشتراكات الألعاب والتطبيقات والبطاقات والخدمات الإلكترونية.', category: 'websites', type: 'web', image: syriaStore, link: 'https://syria-store.site' },
  { id: 3, name: 'Tiger Card', description: 'متجر إلكتروني لشحن الألعاب وبيع الاشتراكات والبطاقات والخدمات الرقمية.', category: 'websites', type: 'web', image: tigerCard, link: 'https://tiger-card.net' },
  { id: 4, name: 'مجموعة عبد الغني التجارية', description: 'متجر إلكتروني متخصص في بيع الأدوات المنزلية والأجهزة الكهربائية.', category: 'websites', type: 'web', image: abdStore, link: 'https://abdulghani-store.com/' },
  { id: 5, name: 'Reno', description: 'تطبيق أندرويد لشراء اشتراكات الألعاب والتطبيقات وشحن الخدمات الرقمية.', category: 'mobile-apps', type: 'app', images: [reno1, reno2, reno3, reno4] },
  { id: 6, name: 'Albatool', description: 'تطبيق متجر إلكتروني لعرض وبيع ملحقات الهواتف المحمولة وإكسسواراتها.', category: 'mobile-apps', type: 'app', images: [albatool1, albatool2, albatool3] },
];

export default projects;
