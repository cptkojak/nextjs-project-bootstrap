import { PrismaClient, ItemType, Rarity } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.chatMessage.deleteMany()
  await prisma.marketListing.deleteMany()
  await prisma.inventoryItem.deleteMany()
  await prisma.inventory.deleteMany()
  await prisma.farmPlot.deleteMany()
  await prisma.farm.deleteMany()
  await prisma.character.deleteMany()
  await prisma.item.deleteMany()
  await prisma.user.deleteMany()

  // Create initial game items
  const items = [
    // Seeds
    {
      name: 'Carrot Seeds',
      description: 'Plant these to grow carrots.',
      type: ItemType.SEED,
      rarity: Rarity.COMMON,
      basePrice: 20,
      stackable: true,
    },
    {
      name: 'Tomato Seeds',
      description: 'Plant these to grow tomatoes.',
      type: ItemType.SEED,
      rarity: Rarity.COMMON,
      basePrice: 25,
      stackable: true,
    },
    {
      name: 'Golden Seeds',
      description: 'Rare seeds that grow into valuable crops.',
      type: ItemType.SEED,
      rarity: Rarity.RARE,
      basePrice: 100,
      stackable: true,
    },

    // Tools
    {
      name: 'Basic Hoe',
      description: 'A simple tool for tilling soil.',
      type: ItemType.TOOL,
      rarity: Rarity.COMMON,
      basePrice: 50,
      stackable: false,
    },
    {
      name: 'Basic Watering Can',
      description: 'Used to water your crops.',
      type: ItemType.TOOL,
      rarity: Rarity.COMMON,
      basePrice: 40,
      stackable: false,
    },
    {
      name: 'Basic Pickaxe',
      description: 'For mining resources.',
      type: ItemType.TOOL,
      rarity: Rarity.COMMON,
      basePrice: 60,
      stackable: false,
    },

    // Crops
    {
      name: 'Carrot',
      description: 'A fresh, crunchy carrot.',
      type: ItemType.CROP,
      rarity: Rarity.COMMON,
      basePrice: 40,
      stackable: true,
    },
    {
      name: 'Tomato',
      description: 'A ripe, juicy tomato.',
      type: ItemType.CROP,
      rarity: Rarity.COMMON,
      basePrice: 45,
      stackable: true,
    },

    // Materials
    {
      name: 'Stone',
      description: 'Basic building material.',
      type: ItemType.MATERIAL,
      rarity: Rarity.COMMON,
      basePrice: 10,
      stackable: true,
    },
    {
      name: 'Copper Ore',
      description: 'Can be refined into copper bars.',
      type: ItemType.MATERIAL,
      rarity: Rarity.UNCOMMON,
      basePrice: 30,
      stackable: true,
    },
    {
      name: 'Iron Ore',
      description: 'Can be refined into iron bars.',
      type: ItemType.MATERIAL,
      rarity: Rarity.UNCOMMON,
      basePrice: 50,
      stackable: true,
    },

    // Potions
    {
      name: 'Energy Potion',
      description: 'Restores 50 energy.',
      type: ItemType.POTION,
      rarity: Rarity.UNCOMMON,
      basePrice: 100,
      stackable: true,
    },
    {
      name: 'Experience Potion',
      description: 'Grants 100 experience points.',
      type: ItemType.POTION,
      rarity: Rarity.RARE,
      basePrice: 200,
      stackable: true,
    },
  ]

  for (const item of items) {
    await prisma.item.create({
      data: item,
    })
  }

  // Create a test user with initial inventory and farm
  const testUser = await prisma.user.create({
    data: {
      email: 'test@example.com',
      username: 'testuser',
      passwordHash: await hash('password123', 10),
    },
  })

  // Create character for test user
  await prisma.character.create({
    data: {
      userId: testUser.id,
      name: 'TestCharacter',
      level: 1,
      experience: 0,
      energy: 100,
      maxEnergy: 100,
      coins: 100,
      farmingLevel: 1,
      miningLevel: 1,
      fishingLevel: 1,
      combatLevel: 1,
    },
  })

  // Create inventory for test user
  const inventory = await prisma.inventory.create({
    data: {
      userId: testUser.id,
      maxSlots: 20,
    },
  })

  // Add starting items to inventory
  const startingItems = [
    { name: 'Basic Hoe', position: 0 },
    { name: 'Basic Watering Can', position: 1 },
    { name: 'Basic Pickaxe', position: 2 },
    { name: 'Carrot Seeds', position: 3, quantity: 5 },
    { name: 'Tomato Seeds', position: 4, quantity: 5 },
  ]

  for (const startingItem of startingItems) {
    const item = await prisma.item.findUnique({
      where: { name: startingItem.name },
    })

    if (item) {
      await prisma.inventoryItem.create({
        data: {
          inventoryId: inventory.id,
          itemId: item.id,
          quantity: startingItem.quantity || 1,
          position: startingItem.position,
        },
      })
    }
  }

  // Create farm for test user
  const farm = await prisma.farm.create({
    data: {
      userId: testUser.id,
      name: 'Test Farm',
      level: 1,
      maxPlots: 9,
    },
  })

  // Create initial farm plots
  for (let i = 0; i < 9; i++) {
    await prisma.farmPlot.create({
      data: {
        farmId: farm.id,
        position: i,
        waterLevel: 0,
        isWatered: false,
      },
    })
  }

  console.log('Database has been seeded with initial game data!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
