import { MigrationInterface, QueryRunner } from "typeorm";

export class fillDB1642575681038 implements MigrationInterface {
   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
      INSERT INTO categories (caption, rank) VALUES ('Категория-1', '5');
      INSERT INTO categories (caption, rank) VALUES ('Категория-2', '4');
      INSERT INTO categories (caption, rank) VALUES ('Категория-3', '3');
      INSERT INTO categories (caption, rank) VALUES ('Категория-4', '2');
      INSERT INTO categories (caption, rank) VALUES ('Категория-5', '1');
         
      INSERT INTO categories (caption, parent_category_id ,rank) VALUES ('Подкатегория-1', (SELECT id FROM categories c WHERE c.caption='Категория-1'), '6');
      INSERT INTO categories (caption, parent_category_id ,rank) VALUES ('Подкатегория-2', (SELECT id FROM categories c WHERE c.caption='Категория-1'), '7');
      INSERT INTO categories (caption, parent_category_id ,rank) VALUES ('Подкатегория-3', (SELECT id FROM categories c WHERE c.caption='Категория-1'), '8');
      INSERT INTO categories (caption, parent_category_id ,rank) VALUES ('Подкатегория-4', (SELECT id FROM categories c WHERE c.caption='Категория-1'), '9');
      INSERT INTO categories (caption, parent_category_id ,rank) VALUES ('Подкатегория-5', (SELECT id FROM categories c WHERE c.caption='Категория-1'), '10');
         
      INSERT INTO categories (caption, parent_category_id ,rank) VALUES ('Подкатегория-1', (SELECT id FROM categories c WHERE c.caption='Категория-2'), '11');
      INSERT INTO categories (caption, parent_category_id ,rank) VALUES ('Подкатегория-2', (SELECT id FROM categories c WHERE c.caption='Категория-2'), '12');
      INSERT INTO categories (caption, parent_category_id ,rank) VALUES ('Подкатегория-3', (SELECT id FROM categories c WHERE c.caption='Категория-2'), '13');
      INSERT INTO categories (caption, parent_category_id ,rank) VALUES ('Подкатегория-4', (SELECT id FROM categories c WHERE c.caption='Категория-2'), '14');
      INSERT INTO categories (caption, parent_category_id ,rank) VALUES ('Подкатегория-5', (SELECT id FROM categories c WHERE c.caption='Категория-2'), '15');
         
      INSERT INTO categories (caption, parent_category_id ,rank) VALUES ('Подкатегория-1', (SELECT id FROM categories c WHERE c.caption='Категория-3'), '16');
      INSERT INTO categories (caption, parent_category_id ,rank) VALUES ('Подкатегория-2', (SELECT id FROM categories c WHERE c.caption='Категория-3'), '17');
      INSERT INTO categories (caption, parent_category_id ,rank) VALUES ('Подкатегория-3', (SELECT id FROM categories c WHERE c.caption='Категория-3'), '18');
      INSERT INTO categories (caption, parent_category_id ,rank) VALUES ('Подкатегория-4', (SELECT id FROM categories c WHERE c.caption='Категория-3'), '19');
      INSERT INTO categories (caption, parent_category_id ,rank) VALUES ('Подкатегория-5', (SELECT id FROM categories c WHERE c.caption='Категория-3'), '20');
         
      INSERT INTO categories (caption, parent_category_id ,rank) VALUES ('Подкатегория-1', (SELECT id FROM categories c WHERE c.caption='Категория-4'), '21');
      INSERT INTO categories (caption, parent_category_id ,rank) VALUES ('Подкатегория-2', (SELECT id FROM categories c WHERE c.caption='Категория-4'), '22');
      INSERT INTO categories (caption, parent_category_id ,rank) VALUES ('Подкатегория-3', (SELECT id FROM categories c WHERE c.caption='Категория-4'), '23');
      INSERT INTO categories (caption, parent_category_id ,rank) VALUES ('Подкатегория-4', (SELECT id FROM categories c WHERE c.caption='Категория-4'), '24');
      INSERT INTO categories (caption, parent_category_id ,rank) VALUES ('Подкатегория-5', (SELECT id FROM categories c WHERE c.caption='Категория-4'), '25');
         
      INSERT INTO categories (caption, parent_category_id ,rank) VALUES ('Подкатегория-1', (SELECT id FROM categories c WHERE c.caption='Категория-5'), '26');
      INSERT INTO categories (caption, parent_category_id ,rank) VALUES ('Подкатегория-2', (SELECT id FROM categories c WHERE c.caption='Категория-5'), '27');
      INSERT INTO categories (caption, parent_category_id ,rank) VALUES ('Подкатегория-3', (SELECT id FROM categories c WHERE c.caption='Категория-5'), '28');
      INSERT INTO categories (caption, parent_category_id ,rank) VALUES ('Подкатегория-4', (SELECT id FROM categories c WHERE c.caption='Категория-5'), '29');
      INSERT INTO categories (caption, parent_category_id ,rank) VALUES ('Подкатегория-5', (SELECT id FROM categories c WHERE c.caption='Категория-5'), '30');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Бренд-1', 'someurl.cite/images/image');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Бренд-2', 'someurl.cite/images/image');
         
      INSERT INTO brands (caption, logo_attachment_id) VALUES ('Бренд-1', (SELECT id FROM attachments a WHERE a.name='Бренд-1'));
      INSERT INTO brands (caption, logo_attachment_id) VALUES ('Бренд-2', (SELECT id FROM attachments a WHERE a.name='Бренд-2'));
         
      INSERT INTO currencies (symbol, caption) VALUES ('RUR', 'Рубль :)');
      INSERT INTO currencies (symbol, caption) VALUES ('USD', 'Доллар :)');
         
      INSERT INTO products (caption, description, price, currency_id,  brand_id, category_id, available_amount)
      VALUES ('Продукт-1', 'Продукт-1-Описание', '1000', (SELECT id FROM currencies c WHERE c.symbol='RUR'), (SELECT id FROM brands b WHERE b.caption='Бренд-1'),
      (SELECT id FROM categories c WHERE c.caption='Категория-1'), '9');
      INSERT INTO products (caption, description, price, currency_id,  brand_id, category_id, available_amount)
      VALUES ('Продукт-2', 'Продукт-2-Описание', '1001', (SELECT id FROM currencies c WHERE c.symbol='USD'), (SELECT id FROM brands b WHERE b.caption='Бренд-2'),
      (SELECT id FROM categories c WHERE c.caption='Категория-2'), '9');
      INSERT INTO products (caption, description, price, currency_id,  brand_id, category_id)
      VALUES ('Продукт-3', 'Продукт-3-Описание', '1002', (SELECT id FROM currencies c WHERE c.symbol='RUR'), (SELECT id FROM brands b WHERE b.caption='Бренд-1'),
      (SELECT id FROM categories c WHERE c.caption='Категория-3'));
      INSERT INTO products (caption, description, price, currency_id,  brand_id, category_id, available_amount)
      VALUES ('Продукт-4', 'Продукт-4-Описание', '1003', (SELECT id FROM currencies c WHERE c.symbol='USD'), (SELECT id FROM brands b WHERE b.caption='Бренд-2'),
      (SELECT id FROM categories c WHERE c.caption='Категория-4'), '9');
      INSERT INTO products (caption, description, price, currency_id,  brand_id, category_id)
      VALUES ('Продукт-5', 'Продукт-5-Описание', '1004', (SELECT id FROM currencies c WHERE c.symbol='RUR'), (SELECT id FROM brands b WHERE b.caption='Бренд-1'),
      (SELECT id FROM categories c WHERE c.caption='Категория-5'));
      INSERT INTO products (caption, description, price, currency_id,  brand_id, category_id, available_amount)
      VALUES ('Продукт-26', 'Продукт-26-Описание', '1025', (SELECT id FROM currencies c WHERE c.symbol='USD'), (SELECT id FROM brands b WHERE b.caption='Бренд-2'),
      (SELECT id FROM categories c WHERE c.caption='Подкатегория-1' AND c.parent_category_id=(SELECT id FROM categories c WHERE c.caption='Категория-1')), '10');
      INSERT INTO products (caption, description, price, currency_id,  brand_id, category_id)
      VALUES ('Продукт-27', 'Продукт-27-Описание', '1026', (SELECT id FROM currencies c WHERE c.symbol='RUR'), (SELECT id FROM brands b WHERE b.caption='Бренд-1'),
      (SELECT id FROM categories c WHERE c.caption='Подкатегория-2' AND c.parent_category_id=(SELECT id FROM categories c WHERE c.caption='Категория-1')));
      INSERT INTO products (caption, description, price, currency_id,  brand_id, category_id, available_amount)
      VALUES ('Продукт-28', 'Продукт-28-Описание', '1027', (SELECT id FROM currencies c WHERE c.symbol='USD'), (SELECT id FROM brands b WHERE b.caption='Бренд-2'),
      (SELECT id FROM categories c WHERE c.caption='Подкатегория-3' AND c.parent_category_id=(SELECT id FROM categories c WHERE c.caption='Категория-1')), '10');
      INSERT INTO products (caption, description, price, currency_id,  brand_id, category_id)
      VALUES ('Продукт-29', 'Продукт-29-Описание', '1028', (SELECT id FROM currencies c WHERE c.symbol='RUR'), (SELECT id FROM brands b WHERE b.caption='Бренд-1'),
      (SELECT id FROM categories c WHERE c.caption='Подкатегория-4' AND c.parent_category_id=(SELECT id FROM categories c WHERE c.caption='Категория-1')));
      INSERT INTO products (caption, description, price, currency_id,  brand_id, category_id, available_amount)
      VALUES ('Продукт-30', 'Продукт-30-Описание', '1029', (SELECT id FROM currencies c WHERE c.symbol='USD'), (SELECT id FROM brands b WHERE b.caption='Бренд-2'),
      (SELECT id FROM categories c WHERE c.caption='Подкатегория-5' AND c.parent_category_id=(SELECT id FROM categories c WHERE c.caption='Категория-1')), '10');
      INSERT INTO products (caption, description, price, currency_id,  brand_id, category_id)
      VALUES ('Продукт-6', 'Продукт-6-Описание', '1005', (SELECT id FROM currencies c WHERE c.symbol='RUR'), (SELECT id FROM brands b WHERE b.caption='Бренд-2'),
      (SELECT id FROM categories c WHERE c.caption='Подкатегория-1' AND c.parent_category_id=(SELECT id FROM categories c WHERE c.caption='Категория-2')));
      INSERT INTO products (caption, description, price, currency_id,  brand_id, category_id)
      VALUES ('Продукт-7', 'Продукт-7-Описание', '1006', (SELECT id FROM currencies c WHERE c.symbol='USD'), (SELECT id FROM brands b WHERE b.caption='Бренд-1'),
      (SELECT id FROM categories c WHERE c.caption='Подкатегория-2' AND c.parent_category_id=(SELECT id FROM categories c WHERE c.caption='Категория-2')));
      INSERT INTO products (caption, description, price, currency_id,  brand_id, category_id, available_amount)
      VALUES ('Продукт-8', 'Продукт-8-Описание', '1007', (SELECT id FROM currencies c WHERE c.symbol='RUR'), (SELECT id FROM brands b WHERE b.caption='Бренд-2'),
      (SELECT id FROM categories c WHERE c.caption='Подкатегория-3' AND c.parent_category_id=(SELECT id FROM categories c WHERE c.caption='Категория-2')), '10');
      INSERT INTO products (caption, description, price, currency_id,  brand_id, category_id)
      VALUES ('Продукт-9', 'Продукт-9-Описание', '1008', (SELECT id FROM currencies c WHERE c.symbol='USD'), (SELECT id FROM brands b WHERE b.caption='Бренд-1'),
      (SELECT id FROM categories c WHERE c.caption='Подкатегория-4' AND c.parent_category_id=(SELECT id FROM categories c WHERE c.caption='Категория-2')));
      INSERT INTO products (caption, description, price, currency_id,  brand_id, category_id)
      VALUES ('Продукт-10', 'Продукт-10-Описание', '1009', (SELECT id FROM currencies c WHERE c.symbol='RUR'), (SELECT id FROM brands b WHERE b.caption='Бренд-2'),
      (SELECT id FROM categories c WHERE c.caption='Подкатегория-5' AND c.parent_category_id=(SELECT id FROM categories c WHERE c.caption='Категория-2')));
      INSERT INTO products (caption, description, price, currency_id,  brand_id, category_id)
      VALUES ('Продукт-11', 'Продукт-11-Описание', '1010', (SELECT id FROM currencies c WHERE c.symbol='USD'), (SELECT id FROM brands b WHERE b.caption='Бренд-1'),
      (SELECT id FROM categories c WHERE c.caption='Подкатегория-1' AND c.parent_category_id=(SELECT id FROM categories c WHERE c.caption='Категория-3')));
      INSERT INTO products (caption, description, price, currency_id,  brand_id, category_id)
      VALUES ('Продукт-12', 'Продукт-12-Описание', '1011', (SELECT id FROM currencies c WHERE c.symbol='RUR'), (SELECT id FROM brands b WHERE b.caption='Бренд-2'),
      (SELECT id FROM categories c WHERE c.caption='Подкатегория-2' AND c.parent_category_id=(SELECT id FROM categories c WHERE c.caption='Категория-3')));
      INSERT INTO products (caption, description, price, currency_id,  brand_id, category_id, available_amount)
      VALUES ('Продукт-13', 'Продукт-13-Описание', '1012', (SELECT id FROM currencies c WHERE c.symbol='USD'), (SELECT id FROM brands b WHERE b.caption='Бренд-1'),
      (SELECT id FROM categories c WHERE c.caption='Подкатегория-3' AND c.parent_category_id=(SELECT id FROM categories c WHERE c.caption='Категория-3')), '10');
      INSERT INTO products (caption, description, price, currency_id,  brand_id, category_id)
      VALUES ('Продукт-14', 'Продукт-14-Описание', '1013', (SELECT id FROM currencies c WHERE c.symbol='RUR'), (SELECT id FROM brands b WHERE b.caption='Бренд-2'),
      (SELECT id FROM categories c WHERE c.caption='Подкатегория-4' AND c.parent_category_id=(SELECT id FROM categories c WHERE c.caption='Категория-3')));
      INSERT INTO products (caption, description, price, currency_id,  brand_id, category_id)
      VALUES ('Продукт-15', 'Продукт-15-Описание', '1014', (SELECT id FROM currencies c WHERE c.symbol='USD'), (SELECT id FROM brands b WHERE b.caption='Бренд-1'),
      (SELECT id FROM categories c WHERE c.caption='Подкатегория-5' AND c.parent_category_id=(SELECT id FROM categories c WHERE c.caption='Категория-3')));
      INSERT INTO products (caption, description, price, currency_id,  brand_id, category_id)
      VALUES ('Продукт-16', 'Продукт-16-Описание', '1015', (SELECT id FROM currencies c WHERE c.symbol='RUR'), (SELECT id FROM brands b WHERE b.caption='Бренд-2'),
      (SELECT id FROM categories c WHERE c.caption='Подкатегория-1' AND c.parent_category_id=(SELECT id FROM categories c WHERE c.caption='Категория-4')));
      INSERT INTO products (caption, description, price, currency_id,  brand_id, category_id, available_amount)
      VALUES ('Продукт-17', 'Продукт-17-Описание', '1016', (SELECT id FROM currencies c WHERE c.symbol='USD'), (SELECT id FROM brands b WHERE b.caption='Бренд-1'),
      (SELECT id FROM categories c WHERE c.caption='Подкатегория-2' AND c.parent_category_id=(SELECT id FROM categories c WHERE c.caption='Категория-4')), '10');
      INSERT INTO products (caption, description, price, currency_id,  brand_id, category_id)
      VALUES ('Продукт-18', 'Продукт-18-Описание', '1017', (SELECT id FROM currencies c WHERE c.symbol='RUR'), (SELECT id FROM brands b WHERE b.caption='Бренд-2'),
      (SELECT id FROM categories c WHERE c.caption='Подкатегория-3' AND c.parent_category_id=(SELECT id FROM categories c WHERE c.caption='Категория-4')));
      INSERT INTO products (caption, description, price, currency_id,  brand_id, category_id)
      VALUES ('Продукт-19', 'Продукт-19-Описание', '1018', (SELECT id FROM currencies c WHERE c.symbol='USD'), (SELECT id FROM brands b WHERE b.caption='Бренд-1'),
      (SELECT id FROM categories c WHERE c.caption='Подкатегория-4' AND c.parent_category_id=(SELECT id FROM categories c WHERE c.caption='Категория-4')));
      INSERT INTO products (caption, description, price, currency_id,  brand_id, category_id, available_amount)
      VALUES ('Продукт-20', 'Продукт-20-Описание', '1019', (SELECT id FROM currencies c WHERE c.symbol='RUR'), (SELECT id FROM brands b WHERE b.caption='Бренд-2'),
      (SELECT id FROM categories c WHERE c.caption='Подкатегория-5' AND c.parent_category_id=(SELECT id FROM categories c WHERE c.caption='Категория-4')), '10');
      INSERT INTO products (caption, description, price, currency_id,  brand_id, category_id)
      VALUES ('Продукт-21', 'Продукт-21-Описание', '1020', (SELECT id FROM currencies c WHERE c.symbol='USD'), (SELECT id FROM brands b WHERE b.caption='Бренд-1'),
      (SELECT id FROM categories c WHERE c.caption='Подкатегория-1' AND c.parent_category_id=(SELECT id FROM categories c WHERE c.caption='Категория-5')));
      INSERT INTO products (caption, description, price, currency_id,  brand_id, category_id)
      VALUES ('Продукт-22', 'Продукт-22-Описание', '1021', (SELECT id FROM currencies c WHERE c.symbol='RUR'), (SELECT id FROM brands b WHERE b.caption='Бренд-2'),
      (SELECT id FROM categories c WHERE c.caption='Подкатегория-2' AND c.parent_category_id=(SELECT id FROM categories c WHERE c.caption='Категория-5')));
      INSERT INTO products (caption, description, price, currency_id,  brand_id, category_id, available_amount)
      VALUES ('Продукт-23', 'Продукт-23-Описание', '1022', (SELECT id FROM currencies c WHERE c.symbol='USD'), (SELECT id FROM brands b WHERE b.caption='Бренд-1'),
      (SELECT id FROM categories c WHERE c.caption='Подкатегория-3' AND c.parent_category_id=(SELECT id FROM categories c WHERE c.caption='Категория-5')), '10');
      INSERT INTO products (caption, description, price, currency_id,  brand_id, category_id)
      VALUES ('Продукт-24', 'Продукт-24-Описание', '1023', (SELECT id FROM currencies c WHERE c.symbol='RUR'), (SELECT id FROM brands b WHERE b.caption='Бренд-2'),
      (SELECT id FROM categories c WHERE c.caption='Подкатегория-4' AND c.parent_category_id=(SELECT id FROM categories c WHERE c.caption='Категория-5')));
      INSERT INTO products (caption, description, price, currency_id,  brand_id, category_id, available_amount)
      VALUES ('Продукт-25', 'Продукт-25-Описание', '1024', (SELECT id FROM currencies c WHERE c.symbol='USD'), (SELECT id FROM brands b WHERE b.caption='Бренд-1'),
      (SELECT id FROM categories c WHERE c.caption='Подкатегория-5' AND c.parent_category_id=(SELECT id FROM categories c WHERE c.caption='Категория-5')), '10');
         
      INSERT INTO properties (caption, type) VALUES ('Текст', 'TEXT');
      INSERT INTO properties (caption, type) VALUES ('Номер', 'NUMBER');
      INSERT INTO properties (caption, type) VALUES ('Дата', 'DATE');
      INSERT INTO properties (caption, type) VALUES ('Цвет', 'COLOR');
         
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-1'),
         (SELECT id FROM properties p WHERE p.caption='Текст'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-1'),
         (SELECT id FROM properties p WHERE p.caption='Номер'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-2'),
         (SELECT id FROM properties p WHERE p.caption='Текст'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-2'),
         (SELECT id FROM properties p WHERE p.caption='Номер'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-3'),
         (SELECT id FROM properties p WHERE p.caption='Текст'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-3'),
         (SELECT id FROM properties p WHERE p.caption='Номер'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-4'),
         (SELECT id FROM properties p WHERE p.caption='Текст'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-4'),
         (SELECT id FROM properties p WHERE p.caption='Номер'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-5'),
         (SELECT id FROM properties p WHERE p.caption='Текст'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-5'),
         (SELECT id FROM properties p WHERE p.caption='Номер'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-6'),
         (SELECT id FROM properties p WHERE p.caption='Текст'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-6'),
         (SELECT id FROM properties p WHERE p.caption='Номер'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-7'),
         (SELECT id FROM properties p WHERE p.caption='Текст'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-7'),
         (SELECT id FROM properties p WHERE p.caption='Номер'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-8'),
         (SELECT id FROM properties p WHERE p.caption='Текст'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-8'),
         (SELECT id FROM properties p WHERE p.caption='Дата'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-9'),
         (SELECT id FROM properties p WHERE p.caption='Текст'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-9'),
         (SELECT id FROM properties p WHERE p.caption='Номер'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-10'),
         (SELECT id FROM properties p WHERE p.caption='Текст'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-10'),
         (SELECT id FROM properties p WHERE p.caption='Номер'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-11'),
         (SELECT id FROM properties p WHERE p.caption='Текст'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-11'),
         (SELECT id FROM properties p WHERE p.caption='Номер'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-12'),
         (SELECT id FROM properties p WHERE p.caption='Текст'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-12'),
         (SELECT id FROM properties p WHERE p.caption='Цвет'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-13'),
         (SELECT id FROM properties p WHERE p.caption='Текст'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-13'),
         (SELECT id FROM properties p WHERE p.caption='Номер'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-14'),
         (SELECT id FROM properties p WHERE p.caption='Текст'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-14'),
         (SELECT id FROM properties p WHERE p.caption='Номер'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-15'),
         (SELECT id FROM properties p WHERE p.caption='Дата'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-15'),
         (SELECT id FROM properties p WHERE p.caption='Номер'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-16'),
         (SELECT id FROM properties p WHERE p.caption='Текст'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-16'),
         (SELECT id FROM properties p WHERE p.caption='Номер'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-17'),
         (SELECT id FROM properties p WHERE p.caption='Текст'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-17'),
         (SELECT id FROM properties p WHERE p.caption='Номер'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-18'),
         (SELECT id FROM properties p WHERE p.caption='Текст'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-18'),
         (SELECT id FROM properties p WHERE p.caption='Цвет'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-19'),
         (SELECT id FROM properties p WHERE p.caption='Текст'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-19'),
         (SELECT id FROM properties p WHERE p.caption='Номер'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-20'),
         (SELECT id FROM properties p WHERE p.caption='Текст'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-20'),
         (SELECT id FROM properties p WHERE p.caption='Номер'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-21'),
         (SELECT id FROM properties p WHERE p.caption='Текст'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-23'),
         (SELECT id FROM properties p WHERE p.caption='Текст'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-23'),
         (SELECT id FROM properties p WHERE p.caption='Номер'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-24'),
         (SELECT id FROM properties p WHERE p.caption='Текст'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-24'),
         (SELECT id FROM properties p WHERE p.caption='Дата'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-25'),
         (SELECT id FROM properties p WHERE p.caption='Текст'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-25'),
         (SELECT id FROM properties p WHERE p.caption='Цвет'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-26'),
         (SELECT id FROM properties p WHERE p.caption='Цвет'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-26'),
         (SELECT id FROM properties p WHERE p.caption='Номер'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-27'),
         (SELECT id FROM properties p WHERE p.caption='Цвет'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-27'),
         (SELECT id FROM properties p WHERE p.caption='Номер'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-28'),
         (SELECT id FROM properties p WHERE p.caption='Цвет'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-28'),
         (SELECT id FROM properties p WHERE p.caption='Текст'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-29'),
         (SELECT id FROM properties p WHERE p.caption='Цвет'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-29'),
         (SELECT id FROM properties p WHERE p.caption='Текст'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-30'),
         (SELECT id FROM properties p WHERE p.caption='Номер'));
      INSERT INTO product_properties (product_id, property_id) VALUES ((SELECT id FROM products p WHERE p.caption='Продукт-30'),
         (SELECT id FROM properties p WHERE p.caption='Цвет'));
         
      INSERT INTO attachments (type, name, file_path) VALUES ('SMALL', 'Продукт-1', 'someurl.cite/images/image');
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Продукт-1', 'someurl.cite/images/image');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('SMALL', 'Продукт-2', 'someurl.cite/images/image');
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Продукт-2', 'someurl.cite/images/image');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('SMALL', 'Продукт-3', 'someurl.cite/images/image');
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Продукт-3', 'someurl.cite/images/image');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('SMALL', 'Продукт-4', 'someurl.cite/images/image');
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Продукт-4', 'someurl.cite/images/image');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('SMALL', 'Продукт-5', 'someurl.cite/images/image');
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Продукт-5', 'someurl.cite/images/image');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('SMALL', 'Продукт-6', 'someurl.cite/images/image');
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Продукт-6', 'someurl.cite/images/image');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('SMALL', 'Продукт-7', 'someurl.cite/images/image');
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Продукт-7', 'someurl.cite/images/image');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('SMALL', 'Продукт-8', 'someurl.cite/images/image');
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Продукт-8', 'someurl.cite/images/image');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('SMALL', 'Продукт-9', 'someurl.cite/images/image');
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Продукт-9', 'someurl.cite/images/image');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('SMALL', 'Продукт-10', 'someurl.cite/images/image');
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Продукт-10', 'someurl.cite/images/image');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('SMALL', 'Продукт-11', 'someurl.cite/images/image');
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Продукт-11', 'someurl.cite/images/image');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('SMALL', 'Продукт-12', 'someurl.cite/images/image');
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Продукт-12', 'someurl.cite/images/image');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('SMALL', 'Продукт-13', 'someurl.cite/images/image');
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Продукт-13', 'someurl.cite/images/image');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('SMALL', 'Продукт-14', 'someurl.cite/images/image');
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Продукт-14', 'someurl.cite/images/image');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('SMALL', 'Продукт-15', 'someurl.cite/images/image');
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Продукт-15', 'someurl.cite/images/image');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('SMALL', 'Продукт-16', 'someurl.cite/images/image');
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Продукт-16', 'someurl.cite/images/image');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('SMALL', 'Продукт-17', 'someurl.cite/images/image');
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Продукт-17', 'someurl.cite/images/image');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('SMALL', 'Продукт-18', 'someurl.cite/images/image');
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Продукт-18', 'someurl.cite/images/image');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('SMALL', 'Продукт-19', 'someurl.cite/images/image');
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Продукт-19', 'someurl.cite/images/image');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('SMALL', 'Продукт-20', 'someurl.cite/images/image');
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Продукт-20', 'someurl.cite/images/image');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('SMALL', 'Продукт-21', 'someurl.cite/images/image');
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Продукт-21', 'someurl.cite/images/image');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('SMALL', 'Продукт-22', 'someurl.cite/images/image');
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Продукт-22', 'someurl.cite/images/image');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('SMALL', 'Продукт-23', 'someurl.cite/images/image');
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Продукт-23', 'someurl.cite/images/image');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('SMALL', 'Продукт-24', 'someurl.cite/images/image');
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Продукт-24', 'someurl.cite/images/image');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('SMALL', 'Продукт-25', 'someurl.cite/images/image');
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Продукт-25', 'someurl.cite/images/image');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('SMALL', 'Продукт-26', 'someurl.cite/images/image');
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Продукт-26', 'someurl.cite/images/image');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('SMALL', 'Продукт-27', 'someurl.cite/images/image');
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Продукт-27', 'someurl.cite/images/image');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('SMALL', 'Продукт-28', 'someurl.cite/images/image');
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Продукт-28', 'someurl.cite/images/image');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('SMALL', 'Продукт-29', 'someurl.cite/images/image');
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Продукт-29', 'someurl.cite/images/image');
         
      INSERT INTO attachments (type, name, file_path) VALUES ('SMALL', 'Продукт-30', 'someurl.cite/images/image');
      INSERT INTO attachments (type, name, file_path) VALUES ('ORIGINAL', 'Продукт-30', 'someurl.cite/images/image');
         
      INSERT INTO product_images (original_attachment_id, small_attachment_id, range) VALUES
      ((SELECT id FROM attachments a WHERE a.name='Продукт-1' AND a.type='ORIGINAL'), (SELECT id FROM attachments a WHERE a.name='Продукт-1' AND a.type='SMALL'), ('1234'));
         
      INSERT INTO product_images (original_attachment_id, small_attachment_id, range) VALUES
      ((SELECT id FROM attachments a WHERE a.name='Продукт-2' AND a.type='ORIGINAL'), (SELECT id FROM attachments a WHERE a.name='Продукт-2' AND a.type='SMALL'), ('1234'));
         
      INSERT INTO product_images (original_attachment_id, small_attachment_id, range) VALUES
      ((SELECT id FROM attachments a WHERE a.name='Продукт-3' AND a.type='ORIGINAL'), (SELECT id FROM attachments a WHERE a.name='Продукт-3' AND a.type='SMALL'), ('1234'));
         
      INSERT INTO product_images (original_attachment_id, small_attachment_id, range) VALUES
      ((SELECT id FROM attachments a WHERE a.name='Продукт-4' AND a.type='ORIGINAL'), (SELECT id FROM attachments a WHERE a.name='Продукт-4' AND a.type='SMALL'), ('1234'));
         
      INSERT INTO product_images (original_attachment_id, small_attachment_id, range) VALUES
      ((SELECT id FROM attachments a WHERE a.name='Продукт-5' AND a.type='ORIGINAL'), (SELECT id FROM attachments a WHERE a.name='Продукт-5' AND a.type='SMALL'), ('1234'));
         
      INSERT INTO product_images (original_attachment_id, small_attachment_id, range) VALUES
      ((SELECT id FROM attachments a WHERE a.name='Продукт-6' AND a.type='ORIGINAL'), (SELECT id FROM attachments a WHERE a.name='Продукт-6' AND a.type='SMALL'), ('1234'));
         
      INSERT INTO product_images (original_attachment_id, small_attachment_id, range) VALUES
      ((SELECT id FROM attachments a WHERE a.name='Продукт-7' AND a.type='ORIGINAL'), (SELECT id FROM attachments a WHERE a.name='Продукт-7' AND a.type='SMALL'), ('1234'));
         
      INSERT INTO product_images (original_attachment_id, small_attachment_id, range) VALUES
      ((SELECT id FROM attachments a WHERE a.name='Продукт-8' AND a.type='ORIGINAL'), (SELECT id FROM attachments a WHERE a.name='Продукт-8' AND a.type='SMALL'), ('1234'));
         
      INSERT INTO product_images (original_attachment_id, small_attachment_id, range) VALUES
      ((SELECT id FROM attachments a WHERE a.name='Продукт-9' AND a.type='ORIGINAL'), (SELECT id FROM attachments a WHERE a.name='Продукт-9' AND a.type='SMALL'), ('1234'));
         
      INSERT INTO product_images (original_attachment_id, small_attachment_id, range) VALUES
      ((SELECT id FROM attachments a WHERE a.name='Продукт-10' AND a.type='ORIGINAL'), (SELECT id FROM attachments a WHERE a.name='Продукт-10' AND a.type='SMALL'), ('1234'));
         
      INSERT INTO product_images (original_attachment_id, small_attachment_id, range) VALUES
      ((SELECT id FROM attachments a WHERE a.name='Продукт-11' AND a.type='ORIGINAL'), (SELECT id FROM attachments a WHERE a.name='Продукт-11' AND a.type='SMALL'), ('1234'));
         
      INSERT INTO product_images (original_attachment_id, small_attachment_id, range) VALUES
      ((SELECT id FROM attachments a WHERE a.name='Продукт-12' AND a.type='ORIGINAL'), (SELECT id FROM attachments a WHERE a.name='Продукт-12' AND a.type='SMALL'), ('1234'));
         
      INSERT INTO product_images (original_attachment_id, small_attachment_id, range) VALUES
      ((SELECT id FROM attachments a WHERE a.name='Продукт-13' AND a.type='ORIGINAL'), (SELECT id FROM attachments a WHERE a.name='Продукт-13' AND a.type='SMALL'), ('1234'));
         
      INSERT INTO product_images (original_attachment_id, small_attachment_id, range) VALUES
      ((SELECT id FROM attachments a WHERE a.name='Продукт-14' AND a.type='ORIGINAL'), (SELECT id FROM attachments a WHERE a.name='Продукт-14' AND a.type='SMALL'), ('1234'));
         
      INSERT INTO product_images (original_attachment_id, small_attachment_id, range) VALUES
      ((SELECT id FROM attachments a WHERE a.name='Продукт-15' AND a.type='ORIGINAL'), (SELECT id FROM attachments a WHERE a.name='Продукт-15' AND a.type='SMALL'), ('1234'));
         
      INSERT INTO product_images (original_attachment_id, small_attachment_id, range) VALUES
      ((SELECT id FROM attachments a WHERE a.name='Продукт-16' AND a.type='ORIGINAL'), (SELECT id FROM attachments a WHERE a.name='Продукт-16' AND a.type='SMALL'), ('1234'));
         
      INSERT INTO product_images (original_attachment_id, small_attachment_id, range) VALUES
      ((SELECT id FROM attachments a WHERE a.name='Продукт-17' AND a.type='ORIGINAL'), (SELECT id FROM attachments a WHERE a.name='Продукт-17' AND a.type='SMALL'), ('1234'));
         
      INSERT INTO product_images (original_attachment_id, small_attachment_id, range) VALUES
      ((SELECT id FROM attachments a WHERE a.name='Продукт-18' AND a.type='ORIGINAL'), (SELECT id FROM attachments a WHERE a.name='Продукт-18' AND a.type='SMALL'), ('1234'));
         
      INSERT INTO product_images (original_attachment_id, small_attachment_id, range) VALUES
      ((SELECT id FROM attachments a WHERE a.name='Продукт-19' AND a.type='ORIGINAL'), (SELECT id FROM attachments a WHERE a.name='Продукт-19' AND a.type='SMALL'), ('1234'));
         
      INSERT INTO product_images (original_attachment_id, small_attachment_id, range) VALUES
      ((SELECT id FROM attachments a WHERE a.name='Продукт-20' AND a.type='ORIGINAL'), (SELECT id FROM attachments a WHERE a.name='Продукт-20' AND a.type='SMALL'), ('1234'));
         
      INSERT INTO product_images (original_attachment_id, small_attachment_id, range) VALUES
      ((SELECT id FROM attachments a WHERE a.name='Продукт-21' AND a.type='ORIGINAL'), (SELECT id FROM attachments a WHERE a.name='Продукт-21' AND a.type='SMALL'), ('1234'));
         
      INSERT INTO product_images (original_attachment_id, small_attachment_id, range) VALUES
      ((SELECT id FROM attachments a WHERE a.name='Продукт-22' AND a.type='ORIGINAL'), (SELECT id FROM attachments a WHERE a.name='Продукт-22' AND a.type='SMALL'), ('1234'));
         
      INSERT INTO product_images (original_attachment_id, small_attachment_id, range) VALUES
      ((SELECT id FROM attachments a WHERE a.name='Продукт-23' AND a.type='ORIGINAL'), (SELECT id FROM attachments a WHERE a.name='Продукт-23' AND a.type='SMALL'), ('1234'));
         
      INSERT INTO product_images (original_attachment_id, small_attachment_id, range) VALUES
      ((SELECT id FROM attachments a WHERE a.name='Продукт-24' AND a.type='ORIGINAL'), (SELECT id FROM attachments a WHERE a.name='Продукт-24' AND a.type='SMALL'), ('1234'));
         
      INSERT INTO product_images (original_attachment_id, small_attachment_id, range) VALUES
      ((SELECT id FROM attachments a WHERE a.name='Продукт-25' AND a.type='ORIGINAL'), (SELECT id FROM attachments a WHERE a.name='Продукт-25' AND a.type='SMALL'), ('1234'));
         
      INSERT INTO product_images (original_attachment_id, small_attachment_id, range) VALUES
      ((SELECT id FROM attachments a WHERE a.name='Продукт-26' AND a.type='ORIGINAL'), (SELECT id FROM attachments a WHERE a.name='Продукт-26' AND a.type='SMALL'), ('1234'));
         
      INSERT INTO product_images (original_attachment_id, small_attachment_id, range) VALUES
      ((SELECT id FROM attachments a WHERE a.name='Продукт-27' AND a.type='ORIGINAL'), (SELECT id FROM attachments a WHERE a.name='Продукт-27' AND a.type='SMALL'), ('1234'));
         
      INSERT INTO product_images (original_attachment_id, small_attachment_id, range) VALUES
      ((SELECT id FROM attachments a WHERE a.name='Продукт-28' AND a.type='ORIGINAL'), (SELECT id FROM attachments a WHERE a.name='Продукт-28' AND a.type='SMALL'), ('1234'));
         
      INSERT INTO product_images (original_attachment_id, small_attachment_id, range) VALUES
      ((SELECT id FROM attachments a WHERE a.name='Продукт-29' AND a.type='ORIGINAL'), (SELECT id FROM attachments a WHERE a.name='Продукт-29' AND a.type='SMALL'), ('1234'));
         
      INSERT INTO product_images (original_attachment_id, small_attachment_id, range) VALUES
      ((SELECT id FROM attachments a WHERE a.name='Продукт-30' AND a.type='ORIGINAL'), (SELECT id FROM attachments a WHERE a.name='Продукт-30' AND a.type='SMALL'), ('1234'));`);
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      // lazyyy zzzzzz
      // anyway it's just for filling test db, just remove this file if needs
   }
}
