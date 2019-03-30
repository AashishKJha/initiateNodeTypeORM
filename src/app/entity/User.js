import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user_table')
class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id = undefined;

    @Column('varchar', {
        nullable: false,
        name: 'first_name',
        unique: false,
        length: 100,
        required: true
    })
    firtName = '';

    @Column('varchar', {
        nullable: false,
        name: 'last_name',
        unique: false,
        length: 100,
        required: true
    })
    lastName = '';

    @Column('simple-array', {
        name: 'contact_number',
    })
    contactNumber = [];

    setFirstName(firtName) {
        this.firtName = firtName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    setContactNumber(contactNumber) {
        this.contactNumber.push(contactNumber);
    }
}

export default UserEntity;
