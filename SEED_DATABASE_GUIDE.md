# 🌱 Database Seeding Guide

## **Complete Steps to Add Initial Data to Your Database**

### **Step 1: Install Required Dependencies**
```bash
npm install tsx
```

### **Step 2: Set Up Your Database Connection**
Make sure your `.env.local` file has the correct database URL:
```bash
DATABASE_URL="postgresql://username:password@ep-xxx-xxx.us-east-1.aws.neon.tech/neondb?sslmode=require"
```

### **Step 3: Generate Prisma Client**
```bash
npx prisma generate
```

### **Step 4: Create Database Migration**
```bash
npx prisma migrate dev --name init
```

### **Step 5: Seed the Database**
```bash
npx prisma db seed
```

## **Alternative Methods to Run the Seed Script**

### **Method 1: Direct TypeScript Execution**
```bash
npx tsx prisma/seed.ts
```

### **Method 2: Using Node.js (if you have ts-node)**
```bash
npx ts-node prisma/seed.ts
```

### **Method 3: Manual Execution**
```bash
node -r ts-node/register prisma/seed.ts
```

## **What the Seed Script Does**

The `prisma/seed.ts` file will add 4 initial testimonials to your database:

1. **Dr. Sarah Johnson** - Stanford Mathematics Program Director
2. **Michael Chen** - Tech4Bharat Mentor  
3. **Priya Nair** - SFCC Co-Lead
4. **Arjun Mehta** - Janam Partner, Aastrika

All testimonials will be created with:
- Status: `APPROVED`
- Approved: `true`
- Unique IDs: `seed_1`, `seed_2`, `seed_3`, `seed_4`

## **Verification Steps**

### **Check if Data was Added:**
1. **Using Prisma Studio:**
   ```bash
   npx prisma studio
   ```
   This will open a web interface where you can see your data.

2. **Using Database Query:**
   ```bash
   npx prisma db execute --stdin
   ```
   Then run: `SELECT * FROM testimonials;`

3. **Check in Your Application:**
   - Visit your website
   - Look for the testimonials section
   - You should see the 4 seeded testimonials

## **Troubleshooting**

### **Common Issues:**

1. **"Command not found" errors:**
   ```bash
   npm install tsx
   ```

2. **Database connection issues:**
   - Check your `DATABASE_URL` in `.env.local`
   - Ensure your Neon.tech database is running
   - Verify your connection string format

3. **Migration errors:**
   ```bash
   npx prisma migrate reset
   npx prisma migrate dev --name init
   ```

4. **Seed script errors:**
   ```bash
   npx prisma generate
   npx prisma db seed
   ```

## **Expected Output**

When you run the seed command successfully, you should see:
```
Seeding testimonials...
Seeding completed!
```

## **Next Steps After Seeding**

1. **Test Your Application:**
   - Visit your website
   - Check if testimonials are displaying
   - Test the admin panel at `/admin/login`

2. **Add More Data:**
   - Use the testimonial form to add new testimonials
   - They will start with `PENDING` status
   - Approve them through the admin panel

3. **Verify Admin Panel:**
   - Login to `/admin/login`
   - Check `/admin/testimonials`
   - You should see the seeded testimonials marked as "Approved"

Your database is now ready with initial testimonial data! 🎉
