import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
export abstract class BaseEntityWithTimestamps {
  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;
}

@ObjectType()
@Entity()
export class ImageLinks extends BaseEntityWithTimestamps {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  url: string;

  @Column()
  @Field()
  uploadedBy: string;
}

@ObjectType()
@Entity()
export class Product extends BaseEntityWithTimestamps {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  price: number;

  @OneToOne(() => ImageLinks, { cascade: true, nullable: true })
  @Field(() => ImageLinks, { nullable: true })
  imageLinks: ImageLinks;

  @Column()
  @Field()
  sizeType: string;

  @Column()
  @Field()
  color: string;

  @OneToMany(() => Tags, (tags) => tags.product, { cascade: true })
  @Field(() => [Tags])
  tags: Tags[];

  @DeleteDateColumn()
  @Field({ nullable: true })
  deletedAt: Date;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  addInfo: string;

  @ManyToOne(() => GeneralDetail, (generalDetail) => generalDetail.product, {
    cascade: true,
  })
  @Field(() => [GeneralDetail])
  generalDetail: GeneralDetail[];

  @ManyToOne(() => ProductDetails, (productDetails) => productDetails.product, {
    cascade: true,
  })
  @Field(() => [ProductDetails])
  productDetails: ProductDetails[];

  @ManyToOne(() => Dimension, (dimension) => dimension.product, {
    cascade: true,
  })
  @Field(() => [Dimension])
  dimension: Dimension[];

  @ManyToOne(() => Warranty, (warranty) => warranty.product, {
    cascade: true,
  })
  @Field(() => [Warranty])
  warranty: Warranty[];
}

@ObjectType()
@Entity()
export class Warranty extends BaseEntityWithTimestamps {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field()
  warrantySummary: string;

  @ManyToOne(
    () => WarrantyServiceType,
    (warrantyServiceType) => warrantyServiceType.warranty,
  )
  @Field(() => [WarrantyServiceType])
  warrantyServiceType: WarrantyServiceType[];

  @Column()
  @Field()
  coveredInWarranty: string;

  @Column()
  @Field()
  notCoveredInWarranty: string;

  @Column()
  @Field()
  DomesticWarranty: string;

  @OneToMany(() => Product, (product) => product.warranty)
  @Field(() => [Product])
  product: Product;
}

@ObjectType()
@Entity()
export class WarrantyServiceType extends BaseEntityWithTimestamps {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field()
  typeName: string;

  @OneToMany(() => Warranty, (warranty) => warranty.warrantyServiceType)
  @Field(() => [Warranty])
  warranty: Warranty[];
}

@ObjectType()
@Entity()
export class Tags extends BaseEntityWithTimestamps {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @ManyToOne(() => Product, (product) => product.tags)
  @Field(() => Product)
  product: Product;
}

@ObjectType()
@Entity()
export class GeneralDetail extends BaseEntityWithTimestamps {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  salesPackage: string;

  @Column()
  @Field()
  modelNumber: string;

  @Column()
  @Field()
  secondaryMaterial: string;

  @Column()
  @Field()
  configuration: string;

  @ManyToOne(
    () => UpholesteryMaterial,
    (upholsteryMaterial) => upholsteryMaterial.generalDetail,
    { cascade: true },
  )
  @Field(() => [UpholesteryMaterial])
  upholsteryMaterial: UpholesteryMaterial[];

  @Column()
  @Field()
  upholsteryColor: string;

  @OneToMany(() => Product, (product) => product.generalDetail)
  @Field(() => [Product])
  product: Product;
}

@ObjectType()
@Entity()
export class UpholesteryMaterial extends BaseEntityWithTimestamps {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  materialName: string;

  @OneToMany(
    () => GeneralDetail,
    (generalDetail) => generalDetail.upholsteryMaterial,
  )
  @Field(() => [GeneralDetail])
  generalDetail: GeneralDetail[];
}

@ObjectType()
@Entity()
export class ProductDetails extends BaseEntityWithTimestamps {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @ManyToOne(
    () => FillingMaterial,
    (fillingMaterial) => fillingMaterial.productDetails,
    {
      cascade: true,
    },
  )
  @Field(() => [FillingMaterial])
  fillingMaterial: FillingMaterial[];

  @Column()
  @Field()
  FinishType: string;

  @Column()
  @Field()
  Adjustable: boolean;

  @Column()
  @Field()
  MaxLoadCapacity: number;

  @Column()
  @Field()
  OriginOfManufacture: string;

  @OneToMany(() => Product, (product) => product.productDetails)
  @Field(() => [Product])
  product: Product;
}

@ObjectType()
@Entity()
export class FillingMaterial extends BaseEntityWithTimestamps {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  materialName: string;

  @OneToMany(
    () => ProductDetails,
    (productDetails) => productDetails.fillingMaterial,
  )
  @Field(() => [ProductDetails])
  productDetails: ProductDetails;
}

@ObjectType()
@Entity()
export class Dimension extends BaseEntityWithTimestamps {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field()
  width: number;

  @Column()
  @Field()
  height: number;

  @Column()
  @Field()
  Depth: number;

  @Column()
  @Field()
  weight: number;

  @Column()
  @Field()
  seatHeight: string;

  @Column()
  @Field()
  legHeight: string;

  @OneToMany(() => Product, (product) => product.dimension)
  @Field(() => [Product])
  product: Product;
}
