import ruohStore from '../assets/optimized/ruohstore.webp';
import syriaStore from '../assets/optimized/syriastore.webp';
import tigerCard from '../assets/optimized/tigercard.webp';
import abdStore from '../assets/optimized/abd.webp';
import sahmStore from '../assets/optimized/sahmstore.webp';
import nau1 from '../assets/optimized/nau1.webp';
import nau2 from '../assets/optimized/nau2.webp';
import reno1 from '../assets/optimized/reno1.webp';
import reno2 from '../assets/optimized/reno2.webp';
import reno3 from '../assets/optimized/reno3.webp';
import reno4 from '../assets/optimized/reno4.webp';
import albatool1 from '../assets/optimized/albatool1.webp';
import albatool2 from '../assets/optimized/albatool2.webp';
import albatool3 from '../assets/optimized/albatool3.webp';

export const categories = [
  { id: 'all', label: 'جميع المشاريع' },
  { id: 'websites', label: 'مواقع الويب' },
  { id: 'mobile-apps', label: 'تطبيقات أندرويد' },
];

export const projects = [
  { id: 7, stageColor: '#dde7ef', name: 'Sahm Store', description: 'متجر إلكتروني للخدمات الرقمية وشحن الألعاب وتطبيقات الدردشة، بواجهة عربية وتصنيفات واضحة.', category: 'websites', type: 'web', image: sahmStore, link: 'https://sahm-store.com/' },
  { id: 2, stageColor: '#e5e9df', name: 'Syria Store', description: 'متجر رقمي لبيع اشتراكات الألعاب والتطبيقات والبطاقات والخدمات الإلكترونية.', category: 'websites', type: 'web', image: syriaStore, link: 'https://syria-store.site' },
  { id: 3, stageColor: '#e5e3ef', name: 'Tiger Card', description: 'متجر إلكتروني لشحن الألعاب وبيع الاشتراكات والبطاقات والخدمات الرقمية.', category: 'websites', type: 'web', image: tigerCard, link: 'https://tiger-card.net' },
  { id: 4, stageColor: '#eee6da', name: 'مجموعة عبد الغني التجارية', description: 'متجر إلكتروني متخصص في بيع الأدوات المنزلية والأجهزة الكهربائية.', category: 'websites', type: 'web', image: abdStore, link: 'https://abdulghani-store.com/' },
  { id: 1, stageColor: '#eee0e3', name: 'Ruoh Store', description: 'متجر إلكتروني متكامل لبيع اشتراكات الألعاب والتطبيقات والخدمات الرقمية.', category: 'websites', type: 'web', image: ruohStore, link: 'https://ruoh-store.com' },
  { id: 8, stageColor: '#e9e5df', name: 'NAU', description: 'واجهة متجر إلكتروني للأزياء تعرض المجموعات والمنتجات والعروض، بتصميم يبرز الصور ويدعم التصفّح بالعربية.', category: 'websites', type: 'web', images: [nau1, nau2], link: 'https://shop-design-rose.vercel.app/' },
  { id: 5, stageColor: '#dfe7ee', name: 'Reno', description: 'تطبيق أندرويد لشراء اشتراكات الألعاب والتطبيقات وشحن الخدمات الرقمية.', category: 'mobile-apps', type: 'app', images: [reno1, reno2, reno3, reno4] },
  { id: 6, stageColor: '#e8e8dc', name: 'Albatool', description: 'تطبيق متجر إلكتروني لعرض وبيع ملحقات الهواتف المحمولة وإكسسواراتها.', category: 'mobile-apps', type: 'app', images: [albatool1, albatool2, albatool3] },
];

export default projects;
