import { motion } from "framer-motion";
import { useUser } from "@/hooks/UserContext";

export const CardLook = () => {
  const { userData } = useUser();

  return (
    <div className="flex items-center justify-center h-[20rem] rounded-2xl w-full">
      <motion.div
        initial={{ filter: "blur(8px)" }}
        whileHover={{ filter: "blur(0px)" }}
        transition={{ duration: 0.3 }}
        className="relative h-64 w-96 rounded-xl bg-gradient-to-br from-blue-600 to-purple-700 p-6 shadow-2xl overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 0 }}
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        />

        <div className="text-right text-white font-bold text-2xl italic">
          VISA
        </div>

        <div className="mt-8 h-10 w-14 rounded bg-yellow-400/20 flex items-center justify-center">
          <div className="h-6 w-8 rounded-sm bg-yellow-400/40" />
        </div>

        <div className="mt-6 font-mono text-white text-xl tracking-widest">
          {userData?.bankCard?.cardNumber
            ? userData.bankCard.cardNumber.replace(/.(?=.{4})/g, "•")
            : "•••• •••• •••• ••••"}
        </div>

        <div className="mt-6 flex justify-between text-white text-sm">
          <div>
            <div className="text-neutral-300 text-xs">CARD HOLDER</div>
            <div className="font-medium">NAME</div>
          </div>
          <div>
            <div className="text-neutral-300 text-xs">EXPIRES</div>
            <div className="font-medium">12/25</div>
          </div>
          <div>
            <div className="text-neutral-300 text-xs">CVV</div>
            <div className="font-medium">•••</div>
          </div>
        </div>

        
        <motion.div
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0 }}
          className="absolute inset-0 flex items-center justify-center text-white/50 text-sm"
        >
          Hover to reveal details
        </motion.div>
      </motion.div>
    </div>
  );
};
