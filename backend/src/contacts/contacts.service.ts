import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactsService {
  //
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
  ) {}
  //
  async create(createContactDto: CreateContactDto) {
    try {
      //
      const newContact = this.contactRepository.create(createContactDto);

      await this.contactRepository.save(newContact);

      return {
        message: 'Contact Created Successfully',
        data: newContact,
      };
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }

  async findAll() {
    try {
      // 
      const contacts = await this.contactRepository.find({
        order: {
          name: 'ASC',
        },
      });

      return {
        message: 'Contacts List Successfully',
        data: contacts,
      };

    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }

  async findOne(id: number) {
    try {
      const contact = await this.contactRepository.findOneBy({id});
      if (!contact) {
        throw new BadRequestException('Contact not found');
      }
      return {
        message: 'Contact Details',
        data: contact,
      };
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }

  async update(id: number, updateContactDto: UpdateContactDto) {
    try {
      let contact=await this.findOne(id);

      await this.contactRepository.update(id,updateContactDto);

      contact=await this.findOne(id);

      return {
        message: 'Contact Updated Successfully',
        data: contact,
      };

     
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }

  async remove(id: number) {
    try {
      let contact=await this.findOne(id);

      await this.contactRepository.softRemove({id});

      return{
        message: 'Contact Deleted Successfully',
        data: contact,
      }
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }

  async destroy(id: number) {
    try {
      const contact = await this.contactRepository.findOne({
        where: {id},
        withDeleted: true,
      });

      if (!contact) {
        throw new BadRequestException('Contact not found');
      }

      await this.contactRepository.delete(id);

      return {
        message: 'Contact Destroyed Successfully',
        data: contact,
      };

      
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }
}
