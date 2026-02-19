export default AddressService {
  static async createAddress(data: CreateAddressDTO) {
    return prisma.address.create({
      data: toPrismaAddressCreate(data),
    });
  }

  static async update(