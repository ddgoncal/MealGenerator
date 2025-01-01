import React, { useState } from 'react';
import { Camera, ChefHat, Loader2 } from 'lucide-react';
import { IngredientsList } from './IngredientsList';
import { CameraScanner } from './CameraScanner';

interface IngredientInputProps {
  ingredients: string[];
  setIngredients: (ingredients: string[]) => void;
  onGenerate: () => void;
  isLoading: boolean;
}

export const IngredientInput: React.FC<IngredientInputProps> = ({
  ingredients,
  setIngredients,
  onGenerate,
  isLoading
}) => {
  const [isScanning, setIsScanning] = useState(false);

  const startScanning = () => setIsScanning(true);

  const handleScanComplete = (ingredients: string[]) => {
    //setIngredients([...ingredients, ...scannedIngredients]);
    setIsScanning(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Add Your Ingredients</h2>
      
      <IngredientsList
        ingredients={ingredients}
        setIngredients={setIngredients}
      />
      
      <div className="flex gap-2 mt-6">
        <button
          onClick={startScanning}
          className="flex items-center gap-2 px-4 py-2 text-gray-600 bg-gray-100 
            rounded-lg hover:bg-gray-200 transition-colors"
        >
          <Camera size={18} />
          Scan Ingredients
        </button>
        
        <button
          onClick={onGenerate}
          disabled={ingredients.length === 0 || isLoading}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 
            bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors 
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <Loader2 className="animate-spin" size={18} />
          ) : (
            <ChefHat size={18} />
          )}
          Generate Recipe
        </button>
      </div>

      { isScanning && (
      <CameraScanner
        onScan={handleScanComplete}
        onClose={() => setIsScanning(false)}
      />
    ) }
    </div>
  );
};