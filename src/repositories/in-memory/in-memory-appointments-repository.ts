import { Appointment } from "../../entities/appointment";
import { AppointmentsRepository } from "../appointments-repository";

export class InMemoryAppointmentsRepository implements AppointmentsRepository {
  public items: Array<Appointment> = [];

  async create(appointment: Appointment): Promise<void> {
    this.items.push(appointment);
  }
}
