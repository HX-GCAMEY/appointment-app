import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({
  name: "credentials",
})
class Credential {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;
}

export default Credential;
