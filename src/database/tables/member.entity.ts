
import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({name: 'user'})
@Unique('unique_username_constraint', ['username'])
export class Member {   
    @PrimaryGeneratedColumn()
    @ApiProperty({ example: 1, description: 'User ID', required: true })
    id: number;

    @Column({nullable: false})
    @ApiProperty({ example: 'username', description: 'User Name', required: true })
    username: string;    
    
    @Column({nullable: false})
    @ApiProperty({ example: 'password', description: 'Password', required: true })
    password: string;  
        
    @Column({nullable: true})
    @ApiProperty({ example: 'firstname', description: 'First Name', required: false })
    firstname: string;
        
    @Column({nullable: true})
    @ApiProperty({ example: 'lastname', description: 'Last Name', required: false })
    lastname: string;

    @Column("varchar", { name: "role", length: 255 })
    @ApiProperty({ example: 'admin', description: 'Role of user', required: false })
    role: string;

    @Column({ name: 'create_time', type: (process.env.DATABASE_TYPE === "sqlite" ? "bigint" : "timestamp"), default: () => 'CURRENT_TIMESTAMP' })
    @ApiProperty({ example: '2024-03-14T18:16:35.000Z', description: 'Last Name', required: false })
    createdAt: Date;   
}