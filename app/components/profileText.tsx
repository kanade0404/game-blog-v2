"use client";
const ProfileText = () => (
  <div>
    {import("./profile.mdx").then(({ default: Component }) => (
      <Component />
    ))}
  </div>
);

export default ProfileText;
